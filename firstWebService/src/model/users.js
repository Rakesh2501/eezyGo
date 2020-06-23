const collection = require('../utilities/connection')
const initialData = require("./users.json")
let model = {}

model.setupUsersDb = () =>{
    return collection.getUsersCollection().then((coll)=>{
        return coll.deleteMany().then((d)=>{
            return coll.insertMany(initialData).then((response)=>{
                if(response && response.length>0){
                    return response.length
                }else{
                    let err = new Error("SetupDB failed")
                    err.status = 500
                    throw new Error
                }
            })
        })
    })
}

model.generateId = ()=>{
    return collection.getUsersCollection().then((coll)=>{
        return coll.distinct("custId").then((ids)=>{
            let newId =  Math.max(...ids)
            return newId > 0 ? newId + 1 : 101
        })
    })
}

model.generateBookingId = ()=>{
    return collection.getUsersCollection().then((coll)=>{
        return coll.distinct("bookings.bId").then((bId)=>{
            let newId =  Math.max(...bId)
            return newId > 0 ? newId + 1 : 1001
        })
    })
}

model.getUsers = () =>{
    return collection.getUsersCollection().then((coll)=>{
        return coll.find().then((data)=>{
            return data
        })
    })
}

model.addUser = (userObj)=>{
    return collection.getUsersCollection().then((coll)=>{
        return model.generateId().then((id)=>{
            userObj.custId = id
            return coll.create(userObj).then((data)=>{
                if(data){
                    return 'success'
                }
            })
        })
    })
}

model.validateLogin = (email,passsword) =>{
    return collection.getUsersCollection().then((coll)=>{
        return coll.findOne({email:email}).then((data)=>{
            if(data){
                if(data.password==passsword){
                    // return true
                    return model.getUserByEmail(email).then((data)=>{
                        if(data){
                            return data
                        }
                    })
                }else{
                    let err = new Error("Invalid password")
                    err.status=404
                    throw err
                }
            }else{
                let err = new Error("Invalid Email Id")
                err.status=404
                throw err
            }
        })
    })
}

model.getUserByEmail=(email)=>{
    return collection.getUsersCollection().then((coll)=>{
        return coll.findOne({email:email}).then((data)=>{
            if(data){
                return data
            }
            else{
                let err = new Error("Could not find the user with email "+email)
                err.status=404
                throw err
            }
        })
    })
}

model.getBookings=(custId)=>{
    return collection.getUsersCollection().then((coll)=>{
        return coll.find({custId:custId},{_id:0,bookings:1}).then((data)=>{
            if(data.length>0){
                return data
            }else{
                let err = new Error("You haven't done any bookings")
                err.status=404
                throw err
            }
        })
    })
}

model.getBookingById=(bId)=>{
    return collection.getUsersCollection().then((coll)=>{
        return coll.findOne({"bookings.bId":bId},{_id:0,bookings:1}).then((data)=>{
            if(data){
                return data.bookings[0]
            }else{
                let err = new Error("No Bookings found")
                err.status=404
                throw err
            }
        })
    })
}

model.addBookingToTravelsCollection=(obj)=>{
    return collection.getTravelsCollection().then((coll)=>{
        return coll.updateOne({busNo:obj.busNo},{$inc:{seats:-obj.noOfSeats}}).then((res1)=>{
            if(res1.nModified>0){
                let flag = 0
                let seatsSuccessfullyUpdated =[];
                obj.seatsSelected.map((seatNo,i)=>{
                    coll.update({busNo:obj.busNo,"seatAvailability.seatNo":seatNo},{$set:{"seatAvailability.$.availabilityStatus":false}}).then((res2)=>{
                        if(res2.nModified<1){
                            flag=1
                        }else{
                            seatsSuccessfullyUpdated.push(seatNo)
                        }
                    })
                })
                if(flag==0){
                    return true
                }else{
                    // write logic to set all the updated seats' availabilityStatus to false and then throw error in .then() block
                    
                }
            }
        })
    })
}

model.addBooking=(custId,obj)=>{

    return collection.getUsersCollection().then((userColl)=>{
        return model.generateBookingId().then((bId)=>{
            obj.bId = bId
            console.log('hi',obj);
            
            return userColl.updateOne({custId:custId},{$push:{bookings:obj}}, { runValidators: true }).then((data)=>{
                if(data.nModified>0){
                    return collection.getTravelsCollection().then((travelsColl)=>{
                        return model.addBookingToTravelsCollection(obj).then((res)=>{
                            if(res == true){
                                return true
                            }
                            else {
                                let err = new Error("Could not book. Some error occured")
                                throw err
                            }
                        })
                    })
                    
                }else{
                    let err = new Error("Could not book. Some error occured")
                    throw err
                }
            })
        })
    })
    
}

model.cancelBooking=(custId,bId)=>{
    return collection.getUsersCollection().then((userColl)=>{
        return model.getBookingById(bId).then((bookingDetails)=>{  
            if(bookingDetails){
                let noOfSeats = bookingDetails.noOfSeats
                return collection.getTravelsCollection().then((travelsColl)=>{
                    return travelsColl.updateOne({busNo:bookingDetails.busNo},{$inc:{seats:noOfSeats}}).then((data1)=>{
                        if(data1.nModified>0){
                            return userColl.updateOne({custId:custId},{$pull:{bookings:{bId:bId}}}).then((data2)=>{
                                if(data2.nModified>0){
                                    return true
                                }else{
                                    let err = new Error("Could not cancel the booking. Some error occured")
                                    throw err
                                }
                    
                            })
                        }else{
                            let err = new Error("Could not cancel the booking. Some error occured")
                            throw err
                        }
                    })
                })
            }else{
                let err = new Error("Booking with "+bId+" has already been cancelled")
                throw err
            }
        })

      

    })
}

module.exports=model
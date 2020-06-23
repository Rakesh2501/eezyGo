const dbLayer = require("../model/users")
const dbLayerTravels = require("../model/travels")
const service = {}

service.setupUsersDb = () =>{
    return dbLayer.setupUsersDb().then((response)=>{
        return response
    })
}

service.getUsers = ()=>{
    return dbLayer.getUsers().then((data)=>{
        if(data){
            return data
        }
        else{
            let err = new Error("No Users");
            err.status=404
            throw err
        }
    })
}

service.addUser=(userObj)=>{
    return dbLayer.addUser(userObj).then((data)=>{
        return data
    })
}

service.validateLogin=(email,password)=>{
    return dbLayer.validateLogin(email,password).then((response)=>{
        if(response){
            return response
        }
    })
}

service.getUserByEmail=(email)=>{
    return dbLayer.getUserByEmail(email).then((data)=>{
        if(data){
            return data
        }
    })
}

service.getBookings=(custId)=>{
    return dbLayer.getBookings(custId).then((data)=>{
        return data[0].bookings
    })
}

service.addBooking=(custId,obj)=>{

    return dbLayerTravels.getTravels(obj.travelAgencyName,obj.source,obj.Destination).then((busDetails)=>{
        if(busDetails.seats>=obj.noOfSeats){
            let fare = busDetails.fare
            let totalCost = fare*obj.noOfSeats

            // obj.busNo=busDetails.busNo
            obj.totalCost = totalCost

            return dbLayer.addBooking(custId,obj).then((data)=>{
                if(data){
                    return true
                }else{
                    return false
                }
            })

        }else{
            if(busDetails.seats<1){
                let err = new Error("No seats are available")
                throw err;
            }else{
                let err = new Error("Only "+busDetails.seats+" seats are available")
                throw err;
            }
        }
    })
    
}

service.cancelBooking=(custId,bId)=>{
    return dbLayer.cancelBooking(custId,bId).then((data)=>{
        return data
    })
}

module.exports=service;
const collection = require("../utilities/connection")
let initialData = require("./travels.json")

let model ={}

model.setupTravelsDb = ()=>{
    return collection.getTravelsCollection().then((coll)=>{
        return coll.deleteMany().then((d)=>{
            return coll.insertMany(initialData).then((data)=>{
                if(data && data.length>0){
                    return data.length
                }else{
                    let err = new Error("SetupDB failed")
                    err.status = 500
                    throw new Error
                }
            })
        })
    })
}

model.getTravels = (name,src,dest)=>{
    return collection.getTravelsCollection().then((coll)=>{
        return coll.findOne({travelAgencyName:name,source:src,Destination:dest}).then((data)=>{
            if(data){
                return data
            }else{
                let err = new Error("Bus details not found")
                err.status = 404
                throw new Error
            }
        })
    })
}

model.getTravelsByLocationAndDate=(src,dest,date)=>{
    return collection.getTravelsCollection().then((coll)=>{
        return coll.find({source:src,Destination:dest,boardingDate:date}).then((data)=>{
            if(data.length>0){
                return data
            }
        })
    })
}

module.exports=model
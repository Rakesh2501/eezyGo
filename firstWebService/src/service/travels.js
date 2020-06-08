const dbLayer = require("../model/travels")

let service = {}

service.setupTravelsDb = () =>{
    return dbLayer.setupTravelsDb().then((data)=>{
        return data
    })
}

service.getTravelsByLocationAndDate=(src,dest,date)=>{
    console.log(src,dest,date);
    
    return dbLayer.getTravelsByLocationAndDate(src,dest,date).then((data)=>{
        return data
    })
}

module.exports=service;
const dbLayer = require("../model/travels")

let service = {}

service.setupTravelsDb = () =>{
    return dbLayer.setupTravelsDb().then((data)=>{
        return data
    })
}

module.exports=service;
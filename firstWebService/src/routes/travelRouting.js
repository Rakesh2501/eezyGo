const express = require("express")
const router = express.Router()
const service = require("../service/travels")

router.get("/setupTravelsDb",(req,res,next)=>{
    return service.setupTravelsDb().then((data)=>{
        if(data){
            res.status(201)
            res.json({message:"Inserted "+data+ " document in database"})
        }
    })
})

router.post("/getTravelsByLocationAndDate",(req,res,next)=>{  
    return service.getTravelsByLocationAndDate(req.body.src,req.body.dest,req.body.date).then((data)=>{
        res.json(data)
    })
})

module.exports=router
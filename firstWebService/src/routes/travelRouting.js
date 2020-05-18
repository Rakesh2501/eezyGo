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

module.exports=router
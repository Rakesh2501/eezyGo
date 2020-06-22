const express = require("express")
const router = express.Router()
const service = require("../service/users")

router.get("/setupUsersDb",(req,res,next)=>{
    return service.setupUsersDb().then((data)=>{
        if(data>0){
            res.status(201)
            res.json({message:"Inserted "+data+ " document in database"})
        }
    })
})

router.get("/getUsers",(req,res,next)=>{
    return service.getUsers().then((data)=>{
        if(data){
            res.json(data)
        }
    }).catch((err)=>{
        next(err)
    })
})

router.post("/login",(req,res,next)=>{
    let email = req.body.email;
    let password = req.body.password;
    return service.validateLogin(email,password).then((response)=>{
        if(response){
            res.json(response)
        }
    }).catch((err)=>{
        next(err)
    })
})

router.post("/register",(req,res,next)=>{
    let userObj = {
        "email":req.body.email,
        "password":req.body.password,
        "firstName":req.body.fname,
        "lastName":req.body.lname,
        "age":req.body.age,
        "address":req.body.address,
        "bookings":[]
    }

    return service.addUser(userObj).then((data)=>{
        if(data){
            res.json({message:data})
        }
    }).catch((err)=>{
        next(err)
    })
    
})

router.get("/getUserByEmail/:email",(req,res,next)=>{
    return service.getUserByEmail(req.params.email).then((data)=>{
        if(data){
            res.json(data)
        }
    }).catch((err)=>{
        next(err)
    })
})

router.get("/getBookings/:custId",(req,res,next)=>{
    return service.getBookings(req.params.custId).then((data)=>{
        if(data){
            res.json(data)
        }
    }).catch((err)=>{
        next(err)
    })
})

router.put("/addBookings/:custId",(req,res,next)=>{
    let obj={
        travelAgencyName:req.body.travelAgencyName,
        source:req.body.source,
        Destination:req.body.Destination,
        boardingDate:new Date(req.body.boardingDate),
        boardingTime:req.body.boardingTime,
        noOfSeats:req.body.noOfSeats,
        busNo:req.body.busNo,
        class:req.body.class,
        journeyHours:req.body.journeyHours,
        passengerDetails:req.body.passengerDetails,
        seatsSelected : req.body.seatsSelected
    }
    console.log(obj);
    
    return service.addBooking(req.params.custId,obj).then((data)=>{
        if(data){
            res.json({message:"Booking successful"})
        }
    }).catch((err)=>{
        next(err)
    })

})

router.put("/cancelBookings/:custId",(req,res,next)=>{
    return service.cancelBooking(req.params.custId,req.body.bId).then((data)=>{
        if(data){
            res.json({message:"Booking successfully cancelled!!!"})
        }
    }).catch((err)=>{
        next(err)
    })
})


module.exports=router;

// {
//     "travelAgencyName":"VRL",
//     "source":"Pune",
//     "Destination":"Udupi",
//     "boardingDate":"2020-05-21",
//     "noOfSeats":2
//   }
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set("useCreateIndex", true)

const passengerDetails={
    "name":String,
    "age":Number
}

const booking = {
    "bId":Number,
    "travelAgencyName":String,
    "busNo":String,
    "source":String,
    "Destination":String,
    "boardingDate":String,
    "boardingTime":String,
    "noOfSeats":Number,
    "totalCost":Number,
    "class":String,
    "journeyHours":Number,
    "passengerDetails":[passengerDetails]
}

const user = {
    "custId":Number,
    "email":String,
    "password":String,
    "firstName":String,
    "lastName":String,
    "age":Number,
    "address":String,
    "bookings":[booking]
}



const travel = {
    "travelAgencyName":String,
    "busNo":String,
    "source":String,
    "Destination":String,
    "fare":Number,
    "seats":Number,
    "customers":[],
    "boardingDate":String,
    "boardingTime":String,
    "class":String,
    "journeyHours":Number
}

let userSchema = mongoose.Schema(user,{collection:'usersCollection',timestamps:true});
let travelSchema = mongoose.Schema(travel,{collection:'travelsCollection', timestamps:true})

let connection={}

connection.getUsersCollection = ()=>{
    return mongoose.connect('mongodb://localhost:27017/travelDB', { useNewUrlParser: true }).then((db)=>{
        return db.model('usersCollection',userSchema)
    }).catch((err)=>{

        console.log(err.message);
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error

    })
}

connection.getTravelsCollection = () =>{
    return mongoose.connect('mongodb://localhost:27017/travelDB',{useNewUrlParser:true}).then((db)=>{
        return db.model('travelsCollection',travelSchema)
    }).catch((err)=>{
        console.log(err.message);
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    })
}


module.exports = connection;



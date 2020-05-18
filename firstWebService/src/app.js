const express = require('express')
const app = express();
const userRouter = require('./routes/userRouting')
const travelRouter = require('./routes/travelRouting')
const myRequestLogger = require("./utilities/requestLogger")
const myErrorLogger = require("./utilities/errorLogger")
const bodyParser = require("body-parser")
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.use(myRequestLogger)
app.use("/",userRouter)
app.use("/",travelRouter)
app.use(myErrorLogger)
app.listen(2000)     
console.log("server succesfully listening at port 2000");

module.exports = app



// {
//     "email":"john@gmail.com",
//     "password":"john",
//     "firstName":"john",
//     "lastName":"doe",
//     "age":40,
//     "address":"Mysore",
//     "bookings":[]
// }
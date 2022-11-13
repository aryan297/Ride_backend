const mongoose = require("mongoose");

const rideType =require('../constants/constant')
const rideState=require('../constants/constant')
// Define a schema


const RideSchema = new mongoose.Schema({
    driverId:mongoose.Types.ObjectId,
    driverName:String,
    riderName:String,
    riderPhone:String,
    pickUPAddress:String,
    dropAddress:String,
    rideType:rideType,
    rideState:rideState,
    paymentType:String,
    amount:Number,
    scheduledTime:Date,
    createdAt:Date
});


module.exports=mongoose.model('Ride',RideSchema)
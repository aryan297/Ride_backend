const mongoose = require("mongoose");

// Define a schema


const DriverSchema = new mongoose.Schema({
  driverName:String,
  driverPhone:String
});


module.exports=mongoose.model('Driver',DriverSchema)
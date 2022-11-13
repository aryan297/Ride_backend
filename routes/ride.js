var express = require('express');
var router = express.Router();
var Driver = require('../models/driver')
var Ride = require('../models/ride')


/* GET users listing. */
router.get("/", async (request, response) => {
  //const driver = await driver.find({});
  const ride = await Ride.find({})

  try {
    response.send(ride);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.post("/add_ride", async (request, response) => {
  console.log(request.body);
  const ride = new Ride(request.body);
  try {
    await ride.save();
    response.json(ride);
  } catch (error) {
    response.status(500).json(error);
  }
});

router.patch("/update_ride/:id", async (request, response) => {

  try {
   const res= await Ride.findByIdAndUpdate(request.params.id, request.body);
    response.send(res);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;

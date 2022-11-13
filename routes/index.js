var express = require('express');
var router = express.Router();
var Driver = require('../models/driver')


/* GET Ride page. */




router.post("/driver", async (request, response) => {
  console.log(request.body);
  const driver = new Driver(request.body);

  try {
    await driver.save();
    response.json(driver);
  } catch (error) {
    response.status(500).json(error);
  }
});


router.get("/driver", async (request, response) => {
  //const driver = await driver.find({});
  const driver = await Driver.find({})

  try {
    response.send(driver);
  } catch (error) {
    response.status(500).send(error);
  }
});


router.patch("/driver/:id", async (request, response) => {

  try {
   const res= await Driver.findByIdAndUpdate(request.params.id, request.body);
    response.send(res);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/getdriver", async (request, response) => {
  const driver = await driver.find({})
  try {
    response.send(driver);
  } catch (error) {
    response.status(500).send(error);
  }
});




module.exports = router;

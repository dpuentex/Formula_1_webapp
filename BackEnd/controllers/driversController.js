const drivers = require("express").Router();
const db = require("../models");
const { Driver } = db;
const { Op } = require("sequelize");

module.exports = drivers;

drivers.get("/", async (req, res) => {
  let = driverData = await Driver.findAll();
  console.log("/drivers/ was hit in your driversController");
  res.send(driverData);
});

drivers.get("/:id", async (req, res) => {
  try {
    const driverId = req.params.id;
    const driverData = await Driver.findByPk(driverId);
    if (driverData) {
      console.log(`/drivers/${driverId} was hit in your driversController`);
      res.send(driverData);
    } else {
      res.status(404).send({ message: "Driver not found" });
    }
  } catch (error) {
    console.error("ERROR while fetching driver", error);
  }
});

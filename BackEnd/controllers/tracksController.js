const tracks = require("express").Router();
const db = require("../models");
const { Track } = db;
const { Op } = require("sequelize");

module.exports = tracks;

tracks.get("/", async (req, res) => {
  let = trackData = await Track.findAll();
  console.log("/tracks/ was hit in your tracksController");
  res.send(trackData);
});

tracks.get("/:id", async (req, res) => {
  try {
    const trackId = req.params.id;
    const trackData = await Track.findByPk(trackId);
    if (trackData) {
      console.log(`/tracks/${trackId} was hit in your tracksController`);
      res.send(trackData);
    } else {
      res.status(404).send({ message: "Tracks not found" });
    }
  } catch (error) {
    console.error("ERROR while fetching track:", error);
  }
});

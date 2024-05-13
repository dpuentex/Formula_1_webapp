const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

//init models
const db = require("./models");
const drivers = require("./controllers/driversController");
const tracks = require("./controllers/tracksController");
const teams = require("./controllers/teamsController");

const { Driver, Track, Team } = db;

//MIDDLEWEAR this PARSE JSON REQUEST
app.use(express.json());
app.use(cors());

app.use("/drivers", require("./controllers/driversController"));
app.use("/tracks", require("./controllers/tracksController"));
app.use("/teams", require("./controllers/teamsController"));

//ROUTES
app.get("/", async (req, res) => {
  try {
    const [drivers, tracks, teams] = await Promise.all([
      Driver.findAll(),
      Track.findAll(),
      Team.findAll(),
    ]);

    const data = { drivers, tracks, teams };
    res.send(data);
  } catch (error) {
    console.log("ERROR while fetching DATA", error);
    res.status(505).send({ message: "Internal server error" });
  }
});

//WILDCARD
app.get("*", (req, res) => {
  res.send("⛔️400 YOU ARE OF TRACK⛔️");
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Sever running on PORT ${PORT}`);
});

const teams = require("express").Router();
const db = require("../models");
const { Team } = db;
const { Op } = require("sequelize");

module.exports = teams;

teams.get("/", async (req, res) => {
  let = teamData = await Team.findAll();
  console.log("/teams/ was hit in your teamsController");
  res.send(teamData);
});

teams.get("/:id", async (req, res) => {
  try {
    const teamId = req.params.id;
    const teamData = await Team.findByPk(teamId);
    if (teamData) {
      console.log(`/teams/${teamId} was hit in your teamsController`);
      res.send(teamData);
    } else {
      res.status(404).send({ message: "Team not found" });
    }
  } catch (error) {
    console.error("ERROR while fetching team", error);
  }
});

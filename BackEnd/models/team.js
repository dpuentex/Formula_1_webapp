"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Team.init(
    {
      team_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      team_name: {
        type: DataTypes.STRING,
      },
      engine_make: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      founded_year: {
        type: DataTypes.INTEGER,
      },
      constructors_titles: {
        type: DataTypes.INTEGER,
      },
      driver_titles: {
        type: DataTypes.INTEGER,
      },
      gp_wins: {
        type: DataTypes.INTEGER,
      },
      team_header_logo: {
        type: DataTypes.STRING,
      },
      car_pic1: {
        type: DataTypes.STRING,
      },
      car_pic2: {
        type: DataTypes.STRING,
      },
      team_pic1: {
        type: DataTypes.STRING,
      },
      team_pic2: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Team",
      tableName: "teams",
      timestamps: false,
    }
  );

  return Team;
};

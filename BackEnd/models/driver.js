"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Driver.init(
    {
      driver_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      driver_name: {
        type: DataTypes.STRING,
      },
      dob: {
        type: DataTypes.DATE,
      },
      country: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      f1_team: {
        type: DataTypes.STRING,
      },
      car_number: {
        type: DataTypes.INTEGER,
      },
      driver_pic1: {
        type: DataTypes.STRING,
      },
      driver_pic2: {
        type: DataTypes.STRING,
      },
      driver_pic3: {
        type: DataTypes.STRING,
      },
      driver_driving1: {
        type: DataTypes.STRING,
      },
      driver_driving2: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Driver",
      tableName:"drivers",
      timestamps: false,
    }
  );

  return Driver;
};

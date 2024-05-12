"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Track.init(
    {
      track_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      gp_name: {
        type: DataTypes.STRING,
      },
      track_name: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      circuit_length: {
        type: DataTypes.FLOAT,
      },
      first_gp: {
        type: DataTypes.INTEGER,
      },
      date_of_gp: {
        type: DataTypes.STRING,
      },
      gp_header_pic: {
        type: DataTypes.STRING,
      },
      gp_track_map1: {
        type: DataTypes.STRING,
      },
      gp_track_map2: {
        type: DataTypes.STRING,
      },
      gp_pic_1: {
        type: DataTypes.STRING,
      },
      gp_pic_2: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Track",
      tableName: "tracks",
      timestamps: false,
    }
  );

  return Track;
};

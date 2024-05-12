"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tracks", {
      track_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gp_name: {
        type: Sequelize.STRING,
      },
      track_name: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      circuit_length: {
        type: Sequelize.FLOAT,
      },
      first_gp: {
        type: Sequelize.INTEGER,
      },
      date_of_gp: {
        type: Sequelize.STRING,
      },
      gp_header_pic: {
        type: Sequelize.STRING,
      },
      gp_track_map1: {
        type: Sequelize.STRING,
      },
      gp_track_map2: {
        type: Sequelize.STRING,
      },
      gp_pic_1: {
        type: Sequelize.STRING,
      },
      gp_pic_2: {
        type: Sequelize.STRING,
      },
      gp_pic_2: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tracks");
  },
};

"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("drivers", {
      driver_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      driver_name: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.DATE,
      },
      country: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      f1_team: {
        type: Sequelize.STRING,
      },
      car_number: {
        type: Sequelize.INTEGER,
      },
      driver_pic1: {
        type: Sequelize.STRING,
      },
      driver_pic2: {
        type: Sequelize.STRING,
      },
      driver_pic3: {
        type: Sequelize.STRING,
      },
      driver_driving1: {
        type: Sequelize.STRING,
      },
      driver_driving2: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("drivers");
  },
};

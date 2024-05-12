"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("teams", {
      team_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      team_name: {
        type: Sequelize.STRING,
      },
      engine_make: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      founded_year: {
        type: Sequelize.INTEGER,
      },
      constructors_titles: {
        type: Sequelize.INTEGER,
      },
      driver_titles: {
        type: Sequelize.INTEGER,
      },
      gp_wins: {
        type: Sequelize.INTEGER,
      },
      team_header_logo: {
        type: Sequelize.STRING,
      },
      car_pic1: {
        type: Sequelize.STRING,
      },
      car_pic2: {
        type: Sequelize.STRING,
      },
      team_pic1: {
        type: Sequelize.STRING,
      },
      team_pic2: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("teams");
  },
};

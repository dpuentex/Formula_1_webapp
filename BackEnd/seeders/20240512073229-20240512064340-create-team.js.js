"use strict";

const { text } = require("express");
const team = require("../models/team");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("teams", [
      {
        team_id: 1,
        team_name: "Red Bull Racing",
        engine_make: "Honda",
        country: "Austrian",
        founded_year: 2005,
        constructors_titles: 4,
        driver_titles: 0,
        gp_wins: 70,
        team_header_logo:
          "https://performance.ford.com/content/fordracing/home/series/formula-1/teams/red-bull-racing/red-bull-racing/_jcr_content/fr-contentItem/image.img.jpg/1675366111887.jpg",
        car_pic1:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/manual/Misc/2022manual/WinterFebruary/RedBullRB18/SI202202090260_hires_jpeg_24bit_rgb",
      },
      {
        team_id: 2,
        team_name: "Mercedes AMG Petronas Formula One Team",
        engine_make: "Mercedes-Benz",
        country: "German",
        founded_year: 1954,
        constructors_titles: 8,
        driver_titles: 0,
        gp_wins: 107,
        team_header_logo:
          "https://images.squarespace-cdn.com/content/v1/59989dd92994ca404885fc8d/1538306654759-ZQ87P1LZJX6V1YIF10V8/mercedes+header.jpg",
        car_pic1:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/manual/Misc/2022manual/WinterFebruary/Mercedes/01_W13_Front_GR_AKK",
      },
      {
        team_id: 3,
        team_name: "Scuderia Ferrari",
        engine_make: "Ferrari",
        country: "Italian",
        founded_year: 1926,
        constructors_titles: 16,
        driver_titles: 0,
        gp_wins: 238,
        team_header_logo:
          "https://cdn.ferrari.com/cms/network/media/img/resize/5eba452a6ec0731c358fc89c-ferrari.vettel-end-2020-land?width=1300&height=730",
        car_pic1:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto/q_auto/content/dam/fom-website/manual/2023/Launches2023/Ferrari2023Launch/Ferrari%20front",
      },
      {
        team_id: 4,
        team_name: "McLaren F1 Team",
        engine_make: "Mercedes-Benz",
        country: "British",
        founded_year: 1963,
        constructors_titles: 8,
        driver_titles: 0,
        gp_wins: 182,
        team_header_logo:
          "https://www.f1authentics.com/cdn/shop/collections/eb4736d835d7f3c47bf294557e16aed2.jpg?v=1682677332&width=2048",
        car_pic1:
          "https://cdn-3.motorsport.com/images/amp/0qXDJgE6/s1200/mclaren-mcl60-1.webp",
      },
      {
        team_id: 5,
        team_name: "Aston Martin Cognizant Formula One Team",
        engine_make: "Mercedes-Benz",
        country: "British ",
        founded_year: 1922,
        constructors_titles: 0,
        driver_titles: 0,
        gp_wins: 0,
        team_header_logo:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/aston%20martin%202024",
        car_pic1:
          "https://www.the-race.com/content/images/size/w1600/2024/02/AMR24_16x9_Image_3-2.jpg",
      },
      {
        team_id: 6,
        team_name: "Alpine F1 Team",
        engine_make: "Renault",
        country: "French",
        founded_year: 1955,
        constructors_titles: 0,
        driver_titles: 0,
        gp_wins: 0,
        team_header_logo:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/alpine",
        car_pic1:
          "https://cdn-3.motorsport.com/images/amp/2eADy7P2/s1200/alpine-a524-2.webp",
      },
      {
        team_id: 7,
        team_name: "Kick Sauber",
        engine_make: "Ferrari",
        country: "Swiss",
        founded_year: 1970,
        constructors_titles: 0,
        driver_titles: 0,
        gp_wins: 0,
        team_header_logo:
          "https://maxf1.net/wp-content/uploads/2024/02/2024-Stake-Sauber-F1-Team-logo-750X215px-Photo-Sauber-Edited-by-MAXF1net.jpg?x65765",
        car_pic1:
          "https://cdn.racingnews365.com/2024/Car-launches/Stake-Sauber/_1456x910_crop_center-center_65_none/12551728/C44_ST-Front_Stake_BOT_16-9.webp?v=1709114685",
      },

      {
        team_id: 8,
        team_name: "Visa Cash App RB",
        engine_make: "Honda",
        country: "British ",
        founded_year: 2005,
        constructors_titles: 0,
        driver_titles: 0,
        gp_wins: 0,
        team_header_logo:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/rb",
        car_pic1:
          "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240209011803_Visa_Cash_App_RB_VCARB_01_front.jpg&w=700&c=1",
      },
      {
        team_id: 9,
        team_name: "Williams Racing",
        engine_make: "Mercedes-Benz",
        country: "British ",
        founded_year: 1977,
        constructors_titles: 9,
        driver_titles: 0,
        gp_wins: 114,
        team_header_logo:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/williams",
        car_pic1:
          "https://www.pitpass.com/images/teams/800/williams/2023liveryreveal02.jpg",
      },
      {
        team_id: 10,
        team_name: "Hass",
        engine_make: "Ferrari",
        country: "American",
        founded_year: 2014,
        constructors_titles: 0,
        driver_titles: 0,
        gp_wins: 0,
        team_header_logo:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/haas",
        car_pic1:
          "https://cdn.motorsport.com/images/mgl/YpNpL8N0/s1200/haas-vf-24-livery.webp",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("teams"),
      {
        team_id: [1],
      };
  },
};

"use strict";

const team = require("../models/team");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tracks", [
      {
        track_id: 1,
        gp_name: "FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2024",
        track_name: "Bahrain International Circuit",
        country: "Bahrain",
        city: "Sakhir",
        circuit_length: 5.412,
        first_gp: 2004,
        date_of_gp: new Date("2024-03-02"),
        gp_header_pic:
          "https://f1chronicle.com/wp-content/uploads/2023/12/large-2023-Bahrain-Grand-Prix-Sunday.webp",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 2,
        gp_name: "FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2024",
        track_name: "Jeddah Corniche Circuit",
        country: "Saudi Arabia",
        city: "Jeddah",
        circuit_length: 6.175,
        first_gp: 2021,
        date_of_gp: new Date("2024-03-09"),
        gp_header_pic:
          "https://racer.com/wp-content/uploads/sites/85/2022/11/1019057833-LAT-20220327-GP2202_173326_J6I3526.jpg",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 3,
        gp_name: "FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2024",
        track_name: "Albert Park Circuit",
        country: "Australia",
        city: "Melbourne",
        circuit_length: 5.303,
        first_gp: 1985,
        date_of_gp: new Date("2024-03-24"),
        gp_header_pic:
          "https://www.austadiums.com/stadiums/photos/albert-park-gp-circuit-1.jpg",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 4,
        gp_name: "FORMULA 1 MSC CRUISES JAPANESE GRAND PRIX 2024",
        track_name: "Suzuka International Racing Course",
        country: "Japan",
        city: "Suzuka",
        circuit_length: 5.807,
        first_gp: 1987,
        date_of_gp: new Date("2024-04-07"),
        gp_header_pic:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Japan",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677250050/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 5,
        gp_name: "FORMULA 1 LENOVO CHINESE GRAND PRIX 2024",
        track_name: "Shanghai International Circuit",
        country: "China",
        city: "Shanghai",
        circuit_length: 5.451,
        first_gp: 2004,
        date_of_gp: new Date("2024-04-21"),
        gp_header_pic:
          "https://www.blackbookmotorsport.com/wp-content/uploads/2023/11/fia-f1-grade-one-license-shanghai-international-circuit-chinese-grand-prix-1.jpg",
        gp_track_map1:
          "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 6,
        gp_name: "FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2024",
        track_name: "Miami International Autodrome",
        country: "United States",
        city: "Miami",
        circuit_length: 5.41,
        first_gp: 2024,
        date_of_gp: new Date("2024-05-05"),
        gp_header_pic:
          "https://www.everythingf1.com/wp-content/uploads/2024/04/Miami-2048x1366.jpg",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 7,
        gp_name:
          "FORMULA 1 MSC CRUISES GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2024",
        track_name: "Autodromo Enzo e Dino Ferrari",
        country: "Italy",
        city: "Imola",
        circuit_length: 4.959,
        first_gp: 1980,
        date_of_gp: new Date("2024-05-19"),
        gp_header_pic:
          "https://static.bolognawelcome.com/immagini/68/69/7d/6a/20220518143654_landscape_16_9_desktop.jpg",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 8,
        gp_name: "FORMULA 1 GRAND PRIX DE MONACO 2024",
        track_name: "Circuit de Monaco",
        country: "Monaco",
        city: "Monte Carlo",
        circuit_length: 3.337,
        first_gp: 1929,
        date_of_gp: new Date("2024-05-26"),
        gp_header_pic:
          "https://cdn.williamsf1.tech/images/fnx611yr/production/0e299c68ec9cf6a5d3fe071993ef292123064a7e-3014x1694.jpg?w=1200&auto=format",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monoco_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 9,
        gp_name: "FORMULA 1 AWS GRAND PRIX DU CANADA 2024",
        track_name: "Circuit Gilles-Villeneuve",
        country: "Canada",
        city: "Montreal",
        circuit_length: 4.361,
        first_gp: 1961,
        date_of_gp: new Date("2024-06-09"),
        gp_header_pic:
          "https://motorsportguides.com/wp-content/uploads/2019/10/Circuit-Gilles-Villeneuve__GRANDSTAND_24_6013-copy.jpg",
        gp_track_map1:
          "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 10,
        gp_name: "FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2024",
        track_name: "Circuit de Barcelona-Catalunya",
        country: "Spain",
        city: "Barcelona",
        circuit_length: 4.675,
        first_gp: 1991,
        date_of_gp: new Date("2024-06-23"),
        gp_header_pic: "",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244986/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 11,
        gp_name: "FORMULA 1 QATAR AIRWAYS AUSTRIAN GRAND PRIX 2024",
        track_name: "Red Bull Ring",
        country: "Austria",
        city: "Spielberg",
        circuit_length: 4.318,
        first_gp: 1970,
        date_of_gp: new Date("2024-06-30"),
        gp_header_pic: "",
        gp_track_map1:
          "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 12,
        gp_name: "FORMULA 1 QATAR AIRWAYS BRITISH GRAND PRIX 2024",
        track_name: "Silverstone Circuit",
        country: "United Kingdom",
        city: "Silverstone",
        circuit_length: 5.891,
        first_gp: 1950,
        date_of_gp: new Date("2024-07-07"),
        gp_header_pic:
          "https://cdn-8.motorsport.com/images/amp/YP3WJbo2/s1200/the-busy-pre-race-grid-1.webp",
        gp_track_map1:
          "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 13,
        gp_name: "FORMULA 1 HUNGARIAN GRAND PRIX 2024",
        track_name: "Hungaroring",
        country: "Hungary",
        city: "Budapest",
        circuit_length: 4.381,
        first_gp: 1986,
        date_of_gp: new Date("2024-07-21"),
        gp_header_pic:
          "https://f1destinations.com/wp-content/uploads/2023/07/F1Destinations_2022_Hungarian_GP_Champions_Club_02214.jpg",
        gp_track_map1:
          "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 14,
        gp_name: "FORMULA 1 ROLEX BELGIAN GRAND PRIX 2024",
        track_name: "Circuit de Spa-Francorchamps",
        country: "Belgium",
        city: "Spa",
        circuit_length: 7.004,
        first_gp: 1925,
        date_of_gp: new Date("2024-07-28"),
        gp_header_pic:
          "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2013/08/24/1331608292718_3/mark-webber-rides-up-eau-rouge-on-his-bike",
        gp_track_map1:
          "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 15,
        gp_name: "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2024",
        track_name: "Circuit Zandvoort",
        country: "Netherlands",
        city: "Zandvoort",
        circuit_length: 4.259,
        first_gp: 1952,
        date_of_gp: new Date("2024-08-25"),
        gp_header_pic:
          "https://www.tracksidelegends.com/wp-content/uploads/2021/09/Dutch-GrandPrix-5sept-Overview-100-2500x1250.jpg",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 16,
        gp_name: "FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2024",
        track_name: "Autodromo Nazionale Monza",
        country: "Italy",
        city: "Monza",
        circuit_length: 5.793,
        first_gp: 1921,
        date_of_gp: new Date("2024-09-01"),
        gp_header_pic:
          "https://cdn.ferrari.com/cms/network/media/img/resize/631861110d6096726431517d-monza%20new%20main%20one%201250x700?width=1920&height=0",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244987/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 17,
        gp_name: "FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2024",
        track_name: "Baku City Circu",
        country: "Azerbaijan",
        city: "Baku",
        circuit_length: 6.003,
        first_gp: 2016,
        date_of_gp: new Date("2024-09-15"),
        gp_header_pic:
          "https://img.redbull.com/images/w_3000/q_auto,f_auto/redbullcom/2023/4/25/ofu0xrbl88z2v4z7k4c7/new-kid-on-the-block",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244987/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Baku_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 18,
        gp_name: "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2024",
        track_name: "Marina Bay Street Circuit",
        country: "Singapore",
        city: "Marina Bay",
        circuit_length: 5.063,
        first_gp: 2008,
        date_of_gp: new Date("2024-09-22"),
        gp_header_pic:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245022/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Singapore.jpg.transform/12col-retina/image.jpg",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1683633963/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 19,
        gp_name: "FORMULA 1 PIRELLI UNITED STATES GRAND PRIX 2024",
        track_name: "Circuit of The Americas",
        country: "United States",
        city: "Austin",
        circuit_length: 5.513,
        first_gp: 1908,
        date_of_gp: new Date("2024-10-20"),
        gp_header_pic:
          "https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2021%2F07%2F11133450%2FPA-48098281-1.jpg",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244984/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 20,
        gp_name: "FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2024",
        track_name: "Autódromo Hermanos Rodríguez",
        country: "Mexico",
        city: "Mexico City",
        circuit_length: 4.304,
        first_gp: 1962,
        date_of_gp: new Date("2024-10-27"),
        gp_header_pic:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9South/f_auto/q_auto/fom-website/2023/Mexico/GettyImages-1437758545",
        gp_track_map1:
          "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 21,
        gp_name: "FORMULA 1 LENOVO GRANDE PRÊMIO DE SÃO PAULO 2024",
        track_name: "Autódromo José Carlos Pace",
        country: "Brazil",
        city: "Sao Paulo",
        circuit_length: 4.309,
        first_gp: 1973,
        date_of_gp: new Date("2024-11-03"),
        gp_header_pic:
          "https://phantom-marca-us.unidadeditorial.es/e3f76c0da52e2f2f06cf7cf6df8c34b9/resize/1320/f/webp/assets/multimedia/imagenes/2023/11/03/16990212354402.jpg",
        gp_track_map1:
          "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 22,
        gp_name: "FORMULA 1 HEINEKEN SILVER LAS VEGAS GRAND PRIX 2024",
        track_name: "Las Vegas Strip Circuit",
        country: "United States",
        city: "Las Vegas",
        circuit_length: 6.1,
        first_gp: 1981,
        date_of_gp: new Date("2024-11-24"),
        gp_header_pic:
          "https://globalnews.ca/wp-content/uploads/2023/11/F1-Las-Vegas-Grand-Prix-Red-Bull.jpg?w=2048",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677249930/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 23,
        gp_name: "FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2024",
        track_name: "Lusail International Circuit",
        country: "Qatar",
        city: "Lusail",
        circuit_length: 5.38,
        first_gp: 2024,
        date_of_gp: new Date("2024-12-01"),
        gp_header_pic:
          "https://cdn-8.motorsport.com/images/mgl/0ZRKdlo0/s1200/lusail-international-circuit-o-1.webp",
        gp_track_map1:
          "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244985/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
      {
        track_id: 24,
        gp_name: "FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2024",
        track_name: "Yas Marina Circuit",
        country: "United Arab Emirates",
        city: "Abu Dhabi",
        circuit_length: 5.554,
        first_gp: 2009,
        date_of_gp: new Date("2024-12-08"),
        gp_header_pic:
          "https://static.myconnect.ae/-/media/yasconnect/project/ymc/experiences-details/tour/venue-tour-1440x520.jpg",
        gp_track_map1:
          "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png.transform/8col/image.png",
        gp_track_map2: "",
        gp_pic_1: "",
        gp_pic_2: "",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tracks"),
      {
        track_id: [1],
      };
  },
};

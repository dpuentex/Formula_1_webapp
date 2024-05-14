"use strict";

const { query } = require("express");
const driver = require("../models/driver");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("drivers", [
      {
        driver_id: 1,
        driver_name: "Max Verstappen",
        dob: new Date("1997-09-30"),
        country: "Netherlands",
        age: 26,
        f1_team: "Red Bull Racing",
        car_number: 1,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/verstappen",
        driver_pic3:
          "https://www.reuters.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-2.images.arcpublishing.com%2Freuters%2FK6WG2Z5EQVJGZMSHWMIXEZBMDM.jpg?auth=b6e5d7e9f6db088f1be66a68416f0132c4e1eef9fc185479a98d9fa44109c0ae&width=1200&quality=80",
        driver_driving1:
          "https://cdn-4.motorsport.com/images/amp/YEQne4qY/s1000/max-verstappen-red-bull-racing.webp",
        driver_driving2:
          "https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2021%2F12%2F14161629%2Fmax-verstappen-post-season-test-abu-dhabi-planetf1.jpg",
      },
      {
        driver_id: 2,
        driver_name: "Sergio Perez",
        dob: new Date("1990-01-26"),
        country: "Mexico",
        age: 34,
        f1_team: "Red Bull Racing",
        car_number: 11,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/perez",
        driver_pic3: "https://static.dw.com/image/59749790_605.webp",
        driver_driving1:
          "https://s1.cdn.autoevolution.com/images/news/red-bulls-sergio-perez-is-more-comfortable-with-the-2022-car-versus-2021-says-team-boss-188954_1.jpg",
        driver_driving2:
          "https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2021%2F03%2F27183109%2FSergio-Perez-PA1.jpg",
      },
      {
        driver_id: 3,
        driver_name: "Lewis Hamilton",
        dob: new Date("1985-01-07"),
        country: "United Kingdom",
        age: 37,
        f1_team: "Mercedes AMG Petronas Formula One Team",
        car_number: 44,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/hamilton",
        driver_pic3:
          "https://i.abcnewsfe.com/a/b590d444-4558-4ef8-8a36-db0360c63ecb/lewis-hamilton-gty-8-thg-231113_1699890129613_hpMain_16x9.jpg?w=992",
        driver_driving1:
          "https://cdn-9.motorsport.com/images/amp/YpNgVrW0/s1000/lewis-hamilton-mercedes-w13-1.webp",
        driver_driving2:
          "https://cdn-1.motorsport.com/images/amp/63v1vrwY/s1000/lewis-hamilton-mercedes-w13-1.webp",
      },
      {
        driver_id: 4,
        driver_name: "George Russell",
        dob: new Date("1998-02-15"),
        country: "United Kingdom",
        age: 24,
        f1_team: "Mercedes AMG Petronas Formula One Team",
        car_number: 63,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/russell",
        driver_pic3:
          "https://motorsportmagazine.b-cdn.net/wp-content/uploads/2022/11/George-Russell-celebrates-winning-the-2022-Brazilian-Grand-Prix-800x450.jpg",
        driver_driving1:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/content/dam/fom-website/sutton/2023/Bahrain/Sunday/1471487412",
        driver_driving2:
          "https://cdn-4.motorsport.com/images/amp/2wBVDw30/s1000/george-russell-mercedes-f1-w14.webp",
      },
      {
        driver_id: 5,
        driver_name: "Charles Leclerc",
        dob: new Date("1997-10-16"),
        country: "Monaco",
        age: 24,
        f1_team: "Scuderia Ferrari",
        car_number: 16,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/leclerc",
        driver_pic3:
          "https://thepodiumfinish.net/wp-content/uploads/2022/04/e57efd96-65d9-4ae1-8309-480e8ffd123e.jpeg",
        driver_driving1:
          "https://s1.cdn.autoevolution.com/images/news/ferraris-charles-leclerc-still-believes-he-can-beat-verstappen-and-win-2022-title-192578_1.jpg",
        driver_driving2:
          "https://thepodiumfinish.net/wp-content/uploads/2023/11/Charles-Leclerc-Las-Vegas-Grand-Prix-on-track.jpeg",
      },
      {
        driver_id: 6,
        driver_name: "Carlos Sainz Jr",
        dob: new Date("1994-09-01"),
        country: "Spain",
        age: 27,
        f1_team: "Scuderia Ferrari",
        car_number: 55,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/sainz",
        driver_pic3:
          "https://media.nbclosangeles.com/2023/09/230917-carlos-sainz-getty.jpg?quality=85&strip=all&resize=1200%2C675",
        driver_driving1:
          "https://www.motorsportweek.com/wp-content/uploads/2023/04/AusGP-Sainz.jpg",
        driver_driving2:
          "https://www.reviewjournal.com/wp-content/uploads/2023/11/18531212_web1_sainz.jpg",
      },
      {
        driver_id: 7,
        driver_name: "Lando Norris",
        dob: new Date("1999-11-13"),
        country: "United Kingdom",
        age: 22,
        f1_team: "McLaren F1 Team",
        car_number: 4,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/norris",
        driver_pic3:
          "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*mFlNcY5s4s7rIpIaA7r0DA.jpeg",
        driver_driving1:
          "https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1125,w_2000,x_0,y_60/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/a/5/a5c8a8b5b7d4b9727f17976fdc3383b8f66620c1/nov-18-2023-las-vegas-nevada-usa-mclaren-f1.jpg",
        driver_driving2:
          "https://www.motorsportweek.com/wp-content/uploads/2024/03/SaudiGP-Norris-1.jpg",
      },
      {
        driver_id: 8,
        driver_name: "Oscar Piastri",
        dob: new Date("2001-04-06"),
        country: "Australia",
        age: 21,
        f1_team: "McLaren F1 Team",
        car_number: 81,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/piastri",
        driver_pic3:
          "https://live-production.wcms.abc-cdn.net.au/8661d8d43f08555cc233308eaf8568f4?impolicy=wcms_crop_resize&cropH=2379&cropW=3569&xPos=161&yPos=288&width=862&height=575",
        driver_driving1:
          "https://www.motorsinside.com/images/photo/article/f12023/miniature/1500/mclaren-djeddah-piastri-course.webp",
        driver_driving2:
          "https://cdn-3.motorsport.com/images/amp/6xEX1qM0/s1000/oscar-piastri-mclaren-mcl60-1.webp",
      },
      {
        driver_id: 9,
        driver_name: "Fernando Alonso",
        dob: new Date("1981-07-29"),
        country: "Spain",
        age: 40,
        f1_team: "Aston Martin Cognizant Formula One Team",
        car_number: 14,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/alonso",
        driver_pic3:
          "https://storage.googleapis.com/fp-media/1/2023/03/XPB_1193109_HiRes.jpg",
        driver_driving1:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/content/dam/fom-website/sutton/2023/Bahrain/Saturday/1471212142",
        driver_driving2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9Centre/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Japan___Qualifying/2142291890",
      },
      {
        driver_id: 10,
        driver_name: "Lance Stroll",
        dob: new Date("1998-10-29"),
        country: "Canada",
        age: 23,
        f1_team: "Aston Martin Cognizant Formula One Team",
        car_number: 18,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2024Drivers/stroll",
        driver_pic3:
          "https://assets-global.website-files.com/5f522a1171a9f5468d9a3b39/65f06fe7f4d14e6169e429ac_GP2402_165549_U1A2933%20(1)%20copy.jpg",
        driver_driving1:
          "https://assets-global.website-files.com/5f522a1171a9f5468d9a3b39/65f192b4aa998507ae25497b_GP2402_170810_ONZ9707%20copy.jpg",
        driver_driving2:
          "https://formularapida.net/wp-content/uploads/2023/03/GP2301_121712_ONZ1940-scaled.jpg",
      },
      {
        driver_id: 11,
        driver_name: "Esteban Ocon",
        dob: new Date("1996-09-17"),
        country: "France",
        age: 25,
        f1_team: "Alpine F1 Team",
        car_number: 31,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/ocon",
        driver_pic3:
          "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0226%2Fr1136599_1296x729_16%2D9.jpg&w=1140&cquality=40&format=jpg",
        driver_driving1:
          "https://cdn-9.motorsport.com/images/amp/0L1ElPN2/s1000/formula-1-spanish-gp-2022-este-2.webp",
        driver_driving2:
          "https://cdn-7.motorsport.com/images/amp/68yDPK80/s1000/esteban-ocon-alpine-a521-1.webp",
      },
      {
        driver_id: 12,
        driver_name: "Pierre Gasly",
        dob: new Date("1996-02-07"),
        country: "France",
        age: 26,
        f1_team: "Alpine F1 Team",
        car_number: 10,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/gasly",
        driver_pic3:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/content/dam/fom-website/sutton/2022/AbuDhabi/Tuesday/1443450203",
        driver_driving1:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/trackside-images/2024/F1_Grand_Prix_of_Australia/2108530833",
        driver_driving2:
          "https://sportsbase.io/images/gpfans/copy_1200x800/7ed97da647fa706785aa7a23836685aa017ebb06.jpg",
      },
      {
        driver_id: 13,
        driver_name: "Valtteri Bottas",
        dob: new Date("1989-08-28"),
        country: "Finland",
        age: 34,
        f1_team: "Stake F1 Team",
        car_number: 77,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/bottas",
        driver_pic3:
          "https://hips.hearstapps.com/hmg-prod/images/mercedes-finnish-driver-valtteri-bottas-celebrates-on-the-news-photo-1601219985.jpg?crop=0.670xw:1.00xh;0.218xw,0&resize=980:*",
        driver_driving1:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/content/dam/fom-website/manual/DriverAndTeamImages/2024/2047992871_16by9North",
        driver_driving2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9South/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Japan/2145397295",
      },
      {
        driver_id: 14,
        driver_name: "Zhou Guanyu",
        dob: new Date("1999-05-30"),
        country: "China",
        age: 24,
        f1_team: "Stake F1 Team",
        car_number: 24,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/zhou",
        driver_pic3:
          "https://admin.sauber-motorsports.nobound.com/fileadmin/_processed_/9/c/csm_2024_Chinese_Grand_Prix_-_Sunday_2087b15b04.webp",

        driver_driving1:
          "https://upload.wikimedia.org/wikipedia/commons/0/00/Zhou_Guanyu_2024_Chinese_GP.jpg",
        driver_driving2:
          "https://preview.redd.it/zhou-guanyu-kick-sauber-c44-2024-pre-season-testing-day-2-v0-hy45ywb4g6kc1.jpeg?width=1080&crop=smart&auto=webp&s=9c43ecec045ada48f61be3cfac1d25a3afb9b901",
      },
      {
        driver_id: 15,
        driver_name: "Yuki Tsunoda",
        dob: new Date("2000-05-11"),
        country: "Japan",
        age: 23,
        f1_team: "Visa Cash App RB",
        car_number: 22,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/tsunoda",
        driver_pic3:
          "https://cdn.theathletic.com/app/uploads/2023/05/12095521/GettyImages-1486516178-2048x1366.jpg",
        driver_driving1:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/trackside-images/2024/F1_Grand_Prix_of_Australia/2108529271",
        driver_driving2: "",
      },
      {
        driver_id: 16,
        driver_name: "Daniel Ricciardo",
        dob: new Date("1989-07-01"),
        country: "Australia",
        age: 32,
        f1_team: "Visa Cash App RB",
        car_number: 3,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/ricciardo",
        driver_pic3:
          "https://cdn-5.motorsport.com/images/amp/6b7BgvE0/s1200/daniel-ricciardo-rb-f1-team-2.webp",
        driver_driving1:
          "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/trackside-images/2024/Formula_1_Testing_in_Bahrain___Day_3/2032431752",
        driver_driving2: "",
      },
      {
        driver_id: 17,
        driver_name: "Alex Albon",
        dob: new Date("1996-03-23"),
        country: "Thailand",
        age: 26,
        f1_team: "Williams Racing",
        car_number: 23,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/albon",
        driver_pic3:
          "https://f1chronicle.com/wp-content/uploads/2023/07/WilliamsF1_98657_HiRes-1280x720.jpg",
        driver_driving1:
          "https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2022%2F03%2F31133137%2Falex-albon-williams-jeddah-planetf1.jpg",
        driver_driving2: "",
      },
      {
        driver_id: 18,
        driver_name: "Logan Sargeant",
        dob: new Date("2000-04-30"),
        country: "United States",
        age: 22,
        f1_team: "Williams Racing",
        car_number: 2,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/sargeant",
        driver_pic3:
          "https://cdn.williamsf1.tech/images/fnx611yr/production/61807f8550b609fa0e48a5ba82c36b63bdb569c8-6000x4000.jpg?w=1200&auto=format",
        driver_driving1:
          "https://sportshub.cbsistatic.com/i/r/2022/10/24/a7662fab-477e-4abb-8a8f-0eb5807ba8f6/thumbnail/770x433/edb93b020e3946d86a86cec3b27e3db4/logan-sargeant-getty.jpg",
        driver_driving2: "",
      },
      {
        driver_id: 19,
        driver_name: "Kevin Magnussen ",
        dob: new Date("1992-10-05"),
        country: "Denmark",
        age: 31,
        f1_team: "Hass F1 Team",
        car_number: 20,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/magnussen",
      },
      {
        driver_id: 20,
        driver_name: "Nico Hulkenberg",
        dob: new Date("1987-08-19"),
        country: "Germany",
        age: 31,
        f1_team: "Hass F1 Team",
        car_number: 20,
        driver_pic1:
          "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png",
        driver_pic2:
          "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/hulkenberg",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("drivers"),
      {
        driver_id: [1],
      };
  },
};

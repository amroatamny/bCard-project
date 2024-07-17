const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("config");

const DB_NAME = config.get("DB_NAME");
const DB_PASSWORD = config.get("DB_PASSWORD");
mongoose
  .connect(
    `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@cluster0.fbi6knv.mongodb.net/cardapp`
  )
  .then(
    console.log(
      chalk.yellowBright(
        "you have been connected to mongoDB ATLAS successfully !!!"
      )
    )
  )
  .catch((error) => {
    console.log(
      chalk.redBright.bold(`field to connect to mongoDB ATLAS : ${error}`)
    );
  });

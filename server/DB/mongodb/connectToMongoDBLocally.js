const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect("mongodb://127.0.0.1:27017/cardapp")
  .then(() => {
    console.log(
      chalk.magentaBright("you have been connected to mongoDB successfully !!!")
    );
  })
  .catch((error) => {
    console.log(chalk.redBright.bold(`field to connect to mongoDB : ${error}`));
  });

const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect(
    "mongodb+srv://z3treah:amro213727969@cluster0.fbi6knv.mongodb.net/cardapp"
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

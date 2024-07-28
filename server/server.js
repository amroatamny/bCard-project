const express = require("express");
const app = express();
const chalk = require("chalk");
const router = require("./router/router");
const cors = require("./cors/cors");
const morganLogger = require("./loggers/morganLogger");
const connectToDb = require("./DB/dbService");

const config = require("config");
const {
  generateInitialCards,
  generateInitialUsers,
} = require("./persistence/initialData");

app.use(morganLogger);
app.use(cors);
app.use(express.json());
app.use(router);
app.use(express.static("./public"));

const PORT = config.get("PORT") || 9000;
app.listen(PORT, () => {
  console.log(chalk.blueBright(`you listen to: http://localhost:${PORT}`));
  connectToDb();
  generateInitialCards();
  generateInitialUsers();
});

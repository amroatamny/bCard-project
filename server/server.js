const express = require("express");
const chalk = require("chalk");
const app = express();
const router = require("./router/router");
const cors = require("./cors/cors");

app.use(cors);
app.use(router);
app.use(express.static("./public"));

const PORT = 8181;
app.listen(PORT, () => {
  console.log(chalk.blueBright(`you listen to: http://localhost:${PORT}`));
});

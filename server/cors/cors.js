const express = require("express");
const app = express();
const cors = require("cors");
const chalk = require("chalk");

const accepted_url = ["http://127.0.0.1:5500", "http://localhost:3000"];

const corsOptions = {
  origin: accepted_url,
  code: 200,
};
const options = (req, callback) => {};
app.use(cors(corsOptions));
module.exports = app;

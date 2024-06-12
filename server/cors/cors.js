const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: ["http://127.0.0.1:5500", "http://localhost:3000"],
  code: 200,
};
app.use(cors(corsOptions));
module.exports = app;

const express = require("express");
const app = express();
const chalk = require("chalk");
const morgan = require("morgan");
const currentTime = require("../utils/timeService");

const morganLogger = morgan((tokens, req, res) => {
  const morganString = [
    currentTime(),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res),
    "ms",
  ].join(" ");
  if (tokens.status(req, res) >= 400) return chalk.redBright(morganString);
  return chalk.cyanBright(morganString);
});

module.exports = morganLogger;

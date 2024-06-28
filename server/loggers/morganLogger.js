const express = require("express");
const app = express();
const chalk = require("chalk");
const morgan = require("morgan");
const FS = require("fs");
const { currentDateMorgan, currentTime } = require("../utils/timeService");

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
  if (tokens.status(req, res) >= 400) {
    const isFileExists = FS.existsSync(
      `${__dirname}/logs/${currentDateMorgan()}.log`
    );
    if (!isFileExists) {
      FS.writeFile(
        `${__dirname}/logs/${currentDateMorgan()}.log`,
        `ERROR : ${morganString}\n`,
        (error) => {
          if (error) return console.log(error.message);
        }
      );
    } else {
      FS.appendFile(
        `${__dirname}/logs/${currentDateMorgan()}.log`,
        `ERROR : ${morganString}\n`,
        (error) => {
          if (error) return console.log(error.message);
        }
      );
    }

    return chalk.redBright(morganString);
  }
  return chalk.cyanBright(morganString);
});

module.exports = morganLogger;

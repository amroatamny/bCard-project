const config = require("config");

const ENVIROMENT = config.get("NODE_ENV");

const connectToDb = () => {
  if (ENVIROMENT === "development")
    require("./mongodb/connectToMongoDBLocally");
  if (ENVIROMENT === "production") require("./mongodb/connectToAtlas");
};
module.exports = connectToDb;

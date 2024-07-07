const ENVIROMENT = process.env.ENVIROMENT || "dev";
// const ENVIROMENT = "prod";

const connectToDb = () => {
  if (ENVIROMENT == "dev") require("./mongodb/connectToMongoDBLocally");
  if (ENVIROMENT == "prod") require("./mongodb/connectToAtlas");
};
module.exports = connectToDb;

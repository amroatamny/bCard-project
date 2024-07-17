const jwt = require("jsonwebtoken");
const config = require("config");
const KEY = config.get("JWT_KEY");

const generateAuthToken = (user) => {
  const { _id, isBusinees, isAdmin } = user;
  const token = jwt.sign(user, KEY);
  return token;
};

const verifyToken = (tokenFromClient) => {
  try {
    const userPayLoad = jwt.verify(tokenFromClient, KEY);
    return userPayLoad;
  } catch {
    return null;
  }
};

exports.generateAuthToken = generateAuthToken;
exports.verifyToken = verifyToken;

const { handleError } = require("../utils/handleErrors");
const { verifyToken } = require("./provider/jwt");
const config = require("config");

const KEY = config.get("JWT_KEY");

const auth = (req, res, next) => {
  try {
    const tokenFromClient = req.header("x-auth-token");
    if (!tokenFromClient) throw new Error("authentication Error: please login");
    // console.log(tokenFromClient);
    const userPayload = verifyToken(tokenFromClient, KEY);
    console.log(userPayload);
    req.user = userPayload;
    return next();
  } catch (error) {
    return handleError(res, 403, error.message);
  }
};
module.exports = auth;

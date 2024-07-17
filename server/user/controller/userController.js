const { generateAuthToken } = require("../../auth/provider/jwt");
const { handleError } = require("../../utils/handleErrors");
const { comparePassword } = require("../helpers/bcypt");
const normalizeUser = require("../helpers/normalizeUser");
const loginValidation = require("../models/joi/loginValidation");
const validateUser = require("../models/joi/registerValidation");
const User = require("../models/mongoose/user");

const register = async (req, res) => {
  try {
    const user = req.body;
    const { email } = user;

    const { error } = validateUser(user);
    if (error)
      return handleError(res, 400, `Joi error : ${error.details[0].message}`);

    const isUserExists = await User.findOne({ email });
    if (isUserExists) throw new Error("user already registered");

    const normalizedUser = normalizeUser(user);

    const userToDB = new User(normalizedUser);
    const userFromDB = await userToDB.save();
    res.status(201).send(userFromDB);
  } catch (error) {
    return handleError(res, 500, `mongoose Error : ${error.message}`);
  }
};

const login = async (req, res) => {
  try {
    const user = req.body;
    const { email } = user;
    const { error } = loginValidation(user);
    if (error)
      return handleError(res, 400, `Joi error : ${error.details[0].message}`);

    const userInDB = await User.findOne({ email });
    if (!userInDB)
      throw new Error("authentication Error: invalid email or password");

    const isPasswordValid = comparePassword(user.password, userInDB.password);
    if (!isPasswordValid)
      throw new Error("authentication Error: invalid email or password");

    const { _id, isBusiness, isAdmin } = userInDB;

    const token = generateAuthToken({ _id, isBusiness, isAdmin });

    res.send(token);
  } catch (error) {
    const isAuthError =
      error.message === "authentication Error: invalid email or password";
    return handleError(
      res,
      isAuthError ? 403 : 500,
      `mongoose Error : ${error.message}`
    );
  }
};
exports.register = register;
exports.login = login;

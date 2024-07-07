const { handleError } = require("../../utils/handleErrors");
const normalizeUser = require("../helpers/normalizeUser");
const validateUser = require("../models/joi/validateUser");
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

exports.register = register;

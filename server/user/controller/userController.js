const { handleError } = require("../../utils/handleErrors");
const validateUser = require("../models/joi/validateUser");

const register = (req, res) => {
  const user = req.body;
  const { error } = validateUser(user);
  if (error)
    return handleError(res, 400, `Joi error : ${error.details[0].message}`);
  res.send(user);
};

exports.register = register;

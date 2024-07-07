const mongoose = require("mongoose");
const name_validation = (max, min, required = true) => {
  return {
    type: String,
    minLength: min,
    maxLength: max,
    required,
    trim: true,
  };
};
const name = new mongoose.Schema({
  first: name_validation(256, 2),
  middle: name_validation(256, 2, false),
  last: name_validation(256, 2),
});
module.exports = name;

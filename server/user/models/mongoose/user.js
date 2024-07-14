const mongoose = require("mongoose");
const name = require("./name");
const imageSchema = require("../../../cards/models/mongoose/image");
const addressSchema = require("../../../cards/models/mongoose/address");

const regexType = (regex, unique = false, required = true) => {
  return {
    type: String,
    match: RegExp(regex),
    required,
    unique,
    trim: true,
  };
};

const schema = new mongoose.Schema({
  name: name,
  phone: regexType(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/),
  email: regexType(
    /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
    true
  ),
  password: {
    type: String,
    required: true,
    trim: true,
  },
  image: imageSchema,
  address: addressSchema,
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isBusiness: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", schema);
module.exports = User;

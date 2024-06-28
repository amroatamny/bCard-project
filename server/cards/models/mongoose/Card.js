const mongoose = require("mongoose");
const imageSchema = require("./image");
const addressSchema = require("./address");

const url_regex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const DEFAULT_VALIDATION = {
  type: String,
  minLength: 2,
  maxLength: 256,
  required: true,
  trim: true,
};
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
  title: DEFAULT_VALIDATION,
  subtitle: DEFAULT_VALIDATION,
  description: {
    type: String,
    minLength: 2,
    maxLength: 1024,
    required: true,
    trim: true,
  },
  phone: regexType(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/),
  email: regexType(
    /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
    true
  ),
  web: regexType(url_regex, false, false),
  image: imageSchema,

  address: addressSchema,

  bizNumber: {
    type: Number,
    required: true,
    minLength: 7,
    maxLength: 7,
  },
  likes: [String],

  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const Card = mongoose.model("card", schema);

module.exports = Card;

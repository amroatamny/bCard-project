const mongoose = require("mongoose");
const url_regex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    match: RegExp(url_regex),

    trim: true,
  },
  alt: {
    type: String,
    minLength: 2,
    maxLength: 256,
    required: true,
    trim: true,
  },
});

module.exports = imageSchema;

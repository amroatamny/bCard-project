const mongoose = require("mongoose");

const address_validate = {
  type: String,
  required: true,
  minLength: 2,
  maxLength: 256,
  trim: true,
};
const addressSchema = new mongoose.Schema({
  state: {
    type: String,
    maxLength: 256,
    trim: true,
    lowercase: true,
  },
  country: address_validate,
  city: address_validate,
  street: address_validate,
  houseNumber: {
    type: Number,
    require: true,
    minLength: 1,
  },
  zip: {
    type: Number,
    minLength: 4,
  },
});
module.exports = addressSchema;

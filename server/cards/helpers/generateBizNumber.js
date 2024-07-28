const Card = require("../models/mongoose/Card");
const lodash = require("lodash");
const { handleError } = require("../../utils/handleErrors");

const generateBizNumber = async () => {
  try {
    const random = lodash.random(1000000, 9000000);
    const card = await Card.findOne(
      { bizNumber: random },
      { bizNumber: 1, _id: 0 }
    );
    if (card) return generateBizNumber();
    return random;
  } catch (error) {
    return Promise.reject(`Mongoose error : ${error.message}`);
  }
};
module.exports = generateBizNumber;

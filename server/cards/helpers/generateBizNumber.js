const Card = require("../models/mongoose/Card");
const lodash = require("lodash");
const { handleError } = require("../../utils/handleErrors");

const generateBizNumber = async (req, res) => {
  try {
    const random = lodash.random(1000000, 9000000);
    const card = await Card.findOne({ bizNumber: random }).select([
      "bizNumber",
      "-_id",
    ]);
    res.send(card);
    if (card) return generateBizNumber();
    return random;
  } catch (error) {
    handleError(res, 404, error);
  }
};
module.exports = generateBizNumber;

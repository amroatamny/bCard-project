const { handleError } = require("../../utils/handleErrors");
const normalizeCard = require("../helpers/normalizeCard");
const validateCard = require("../models/joi/validateCard");
const Card = require("../models/mongoose/Card");

const getCards = (req, res) => {
  res.send("in getCards");
};
const getCard = (req, res) => {
  res.send("in get card");
};
const getMyCards = (req, res) => {
  res.send("in my card");
};
const createCard = async (req, res) => {
  try {
    const card = req.body;
    const { error } = validateCard(card);
    if (error)
      return handleError(
        res,
        400,
        "Joi Error : " + `${error.details[0].message}`
      );
    const normalizedCard = normalizeCard(card, "663a4b60fde88147139317e6");

    const cardToDB = new Card(normalizedCard);
    const cardFromDb = await cardToDB.save();
    res.send(cardFromDb);
  } catch (error) {
    return handleError(res, 500, `mongoose error :${error.message}`);
  }
};
const editCard = (req, res) => {
  res.send("in edit card");
};
const likeCard = (req, res) => {
  res.send("like card");
};
const deleteCard = (req, res) => {
  res.send("delete card");
};
exports.deleteCard = deleteCard;
exports.likeCard = likeCard;
exports.editCard = editCard;
exports.createCard = createCard;
exports.getMyCards = getMyCards;
exports.getCard = getCard;
exports.getCards = getCards;

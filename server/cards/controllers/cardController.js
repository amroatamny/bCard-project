const { handleError } = require("../../utils/handleErrors");
const validateCard = require("../models/joi/validateCard");

const getCards = (req, res) => {
  res.send("in getCards");
};
const getCard = (req, res) => {
  res.send("in get card");
};
const getMyCards = (req, res) => {
  res.send("in my card");
};
const createCard = (req, res) => {
  const card = req.body;
  const { error } = validateCard(card);
  if (error)
    return handleError(
      res,
      400,
      "Joi Error : " + `${error.details[0].message}`
    );
  res.send(card);
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

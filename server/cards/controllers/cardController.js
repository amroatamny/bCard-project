const getCards = (req, res) => {
  res.send("in getCards");
};
const getCard = (req, res) => {
  res.send("in get card");
};
const getMyCards = (req, res) => {
  res.send("my cards!!!");
};
const createCard = (req, res) => {
  res.send("create card");
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

const { handleError } = require("../../utils/handleErrors");
const normalizeCard = require("../helpers/normalizeCard");
const validateCard = require("../models/joi/validateCard");
const Card = require("../models/mongoose/Card");

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    if (!cards) throw new Error("there no cards to show ");
    res.send(cards);
  } catch (error) {
    handleError(res, 404, error);
  }
};
const getCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const cardFromDB = await Card.findById(cardId);
    if (!cardFromDB) throw new Error("there no card to show ");
    res.send(cardFromDB);
  } catch (error) {
    handleError(res, 404, error);
  }
};
const getMyCards = async (req, res) => {
  try {
    const userId = req.body.user_id;
    console.log(userId);
    const cardFromDB = await Card.find({ user_id: userId });
    if (!cardFromDB) throw new Error("there no card to show ");
    res.send(cardFromDB);
  } catch (error) {
    handleError(res, 404, error);
  }
};
const createCard = async (req, res) => {
  try {
    const card = req.body;
    const user = req.user;
    if (!user.isBusiness)
      throw new Error("you must be Business user to create card");
    const { error } = validateCard(card);
    if (error)
      return handleError(
        res,
        400,
        "Joi Error : " + `${error.details[0].message}`
      );
    const normalizedCard = normalizeCard(card, user._id);

    const cardToDB = new Card(normalizedCard);
    const cardFromDb = await cardToDB.save();
    res.send(cardFromDb);
  } catch (error) {
    return handleError(res, 500, `mongoose error :${error.message}`);
  }
};
const editCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const normalizeCard = req.body;
    const updateCard = await Card.findByIdAndUpdate(cardId, normalizeCard, {
      new: true,
    });
    if (!updateCard)
      throw new Error(
        "Could not update this card because a card with this ID cannot be found in the database"
      );
    res.send(updateCard);
  } catch (error) {
    handleError(res, 404, error);
  }
};
const likeCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const userId = req.body.user_id;

    const card = await Card.findById(cardId);
    if (!card)
      throw new Error("A card with this ID cannot be found in the database");

    const pipline = (userID, card) => {
      const push = { $push: { likes: userID } };
      const pull = { $pull: { likes: userID } };
      const cardLike = card.likes.find((id) => id === userID);
      if (!cardLike) return push;
      return pull;
    };

    const configuration = { new: true };
    const CardFromDB = await Card.findByIdAndUpdate(
      cardId,
      pipline(userId, card),
      configuration
    );

    if (!CardFromDB)
      throw new Error(
        "Could not update this card because a card with this ID cannot be found in the database"
      );
    res.send(CardFromDB);
  } catch (error) {
    handleError(res, 404, error);
  }
};
const deleteCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const deleteCard = await Card.findByIdAndDelete(cardId);
    if (!deleteCard)
      throw new Error(
        "Could not update this card because a card with this ID cannot be found in the database"
      );
    res.send(deleteCard);
  } catch (error) {
    handleError(res, 404, error);
  }
};
exports.deleteCard = deleteCard;
exports.likeCard = likeCard;
exports.editCard = editCard;
exports.createCard = createCard;
exports.getMyCards = getMyCards;
exports.getCard = getCard;
exports.getCards = getCards;

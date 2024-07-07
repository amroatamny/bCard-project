const { handleError } = require("../../utils/handleErrors");
const normalizeCard = require("../helpers/normalizeCard");
const validateCard = require("../models/joi/validateCard");
const ladosh = require("lodash");
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
// const likeCard = async (req, res) => {
//   try {
//     const { cardId } = req.params;
//     const userId = req.body.user_id;
//     console.log(userId);
//     const cardFromDB = await Card.findById(cardId);
//     if (!cardFromDB)
//       throw new Error(
//         "Could not update this card because a card with this ID cannot be found in the database"
//       );
//     for (let i = 0; i < cardFromDB.likes.length; i++) {
//       if (userId === cardFromDB.likes[i.valueOf(i)]) {
//         const normalizeLikes = cardFromDB.likes.splice(i, i);
//         console.log(normalizeLikes);
//         const updatedCard = await Card.findByIdAndUpdate(
//           cardId,
//           { likes: normalizeLikes },
//           { new: true }
//         );
//         return res.send(updatedCard);
//       }
//     }

//     const normalizeLikes = cardFromDB.likes.push(userId);
//     console.log(normalizeLikes);
//     const updatedCard = await Card.findByIdAndUpdate(
//       cardId,
//       { likes: normalizeLikes },
//       { new: true }
//     );
//     res.send(updatedCard);
//   } catch (error) {
//     handleError(res, 404, error);
//   }
// };

const likeCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const userId = req.body.user_id;
    const pipline = (userid) => {
      const p = { $elemMatch: { likes: userid } };
      console.log(p);
      const push = { $push: { likes: userid } };
      const pull = { $pull: { likes: userid } };
      if (!p) return push;
      return pull;
    };
    // const pipline = {
    //   $cond: {
    //     if: { likes: { $elemMatch: userId } },
    //     then: { $pull: { likes: userId } },
    //     else: { $push: { likes: userId } },
    //   },
    // };
    // console.log(pipline());

    // const pipline = { $push: { likes: userId } };
    const configuration = { new: true };
    const CardFromDB = await Card.findByIdAndUpdate(
      cardId,
      pipline(userId),
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

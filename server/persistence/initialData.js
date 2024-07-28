const normalizeCard = require("../cards/helpers/normalizeCard");
const Card = require("../cards/models/mongoose/Card");
const normalizeUser = require("../user/helpers/normalizeUser");
const User = require("../user/models/mongoose/user");
const data = require("./initialData.json");
const chalk = require("chalk");

const generateInitialCards = async () => {
  const { cards } = data;
  const userId = "66a63981fd71e82516531021";
  cards.forEach(async (card) => {
    try {
      const normalizedCard = await normalizeCard(card, userId);
      const cardToDB = new Card(normalizedCard);
      await cardToDB.save();
    } catch (error) {
      return console.log(
        chalk.redBright(`initial data error :${error.message}`)
      );
    }
  });
};

const generateInitialUsers = async () => {
  const { users } = data;

  users.forEach(async (user) => {
    try {
      const { email } = user;
      const isUserExists = await User.findOne({ email });
      if (isUserExists) throw new Error("user already registered");
      const normalizedUser = normalizeUser(user);
      const userToDB = new User(normalizedUser);
      await userToDB.save();
    } catch (error) {
      console.log(chalk.redBright(`initial data error :${error.message}`));
    }
  });
};

exports.generateInitialCards = generateInitialCards;
exports.generateInitialUsers = generateInitialUsers;

const express = require("express");
const app = express();
const chalk = require("chalk");
const mongoose = require("mongoose");
// const { find } = require("lodash");
const lodash = require("lodash");

app.use(express.json());

const PORT = 8989;
app.listen(PORT, () => {
  console.log(chalk.blueBright(`Listening on: http://localhost:${PORT}`));
  mongoose
    .connect("mongodb://127.0.0.1:27017/mongoose-sandbox")
    .then(() => console.log(chalk.magentaBright("connected to MongoDb!")))
    .catch((error) =>
      console.log(
        chalk.redBright.bold(`could not connect to mongoDb: ${error}`)
      )
    );
});

const handleError = (res, error) => {
  console.log(chalk.redBright(`Mongoose Error: ${error.message}`));
  res.status(400).send(`Mongoose Error: ${error.message}`);
};

/*** basic Schema ***/
// const schema = new mongoose.Schema({});

/*** Schema Values Types  ***/
// const schema = new mongoose.Schema({
//   string: String,
//   number: Number,
//   bool: Boolean,
//   date: Date,
//   id: mongoose.Types.ObjectId,
//   array: [String],
// });

/***** Schema in Schema *****/
// const nameSchema = new mongoose.Schema({
//   first: String,
//   last: String,
// });

// const schema = new mongoose.Schema({
//   name: nameSchema,
// });

/***** Schema validate key *****/
// const schema = new mongoose.Schema({
//   title: {
//     type: String,
//     trim: true,
//     lowercase: true,
//     minLength: 2,
//     maxLength: 256,
//     default: "did not enter title",
//     required: true,
//   },
// });

/***** Schema validate unique *****/
// const schemaU = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

/***** Schema validate regex *****/
// const schema = new mongoose.Schema({
//   password: {
//     type: String,
//     match: RegExp(
//       /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
//     ),
//     required: true,
//   },
// });

/***** mongoose queries *****/
const schema = new mongoose.Schema({
  first: String,
  last: String,
  age: Number,
  isBusiness: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
  like: [String],
});

const Test = mongoose.model("test", schema);

app.post("/", async (req, res) => {
  try {
    const dataFromReqBody = req.body;
    const user = new Test(dataFromReqBody);
    await user.save();
    return res.send(user);
  } catch (error) {
    console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
    res.status(400).send(error.message);
  }
});

/***** find query *****/
app.get("/", async (req, res) => {
  try {
    const instance = await Test.find();
    res.send(instance);
  } catch (error) {
    handleError(res, error);
  }
});

app.get("/query", async (req, res) => {
  try {
    // const instance = await Test.find({ number: { $gte: 2, $lt: 4 } });
    const instance = await Test.find({ number: { $gte: 2 }, bool: false });
    res.send(instance);
  } catch (error) {
    handleError(res, error);
  }
});

app.get("/filter", async (req, res) => {
  try {
    const instance = await Test.find({}, { string: 1, _id: 0 });
    res.send(instance);
  } catch (error) {
    handleError(res, error);
  }
});

app.get("/find-one/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const isExist = await Test.findOne({ _id: id });
    // const instance = await Test.findOne({ number: { $gte: 2 } });
    if (!isExist) throw new Error("Did not found an item with this id");
    res.send(isExist);
  } catch (error) {
    handleError(res, error);
  }
});

app.get("/count", async (req, res) => {
  try {
    const instance = await Test.find({}).count();
    return res.send({ "num of items": instance });
  } catch (error) {
    handleError(res, error);
  }
});

app.get("/select", async (req, res) => {
  try {
    const instance = await Test.find({}).select(["first", "last", "-_id"]);
    return res.send(instance);
  } catch (error) {
    handleError(res, error);
  }
});

app.get("/sort", async (req, res) => {
  try {
    const instance = await Test.find({}).sort({ date: 1 });
    return res.send(instance);
  } catch (error) {
    handleError(res, error);
  }
});

app.get("/select-sort", async (req, res) => {
  try {
    const instance = await Test.find({})
      .select(["first", "-_id"])
      .sort({ first: 1 });
    return res.send(instance);
  } catch (error) {
    handleError(res, error);
  }
});

app.get("/findById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Test.findById(id);
    if (!user) throw new Error("Did not found user with this id");
    res.send(user);
  } catch (error) {
    handleError(res, error);
  }
});

app.put("/findByIdAndUpdate/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const userFromDB = await Test.findByIdAndUpdate(id, user, { new: true });
    if (!userFromDB) throw new Error("Did not found user with this id");
    res.send(userFromDB);
  } catch (error) {
    handleError(res, error);
  }
});

const deleteItemSchema = new mongoose.Schema({
  first: String,
  last: String,
  age: Number,
  isBusiness: Boolean,
  date: Date,
});

const Deleted = mongoose.model("deleted", deleteItemSchema);

app.delete("/findByIdAndDelete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUserFromDB = await Test.findByIdAndDelete(id);
    if (!deletedUserFromDB) throw new Error("Did not found user with this id");

    const normalizedUserForArchive = lodash.pick(
      deletedUserFromDB,
      "first",
      "last",
      "age",
      "date",
      "isBusiness"
    );

    const archivedTest = new Deleted(normalizedUserForArchive);
    const archivedFromDB = await archivedTest.save();
    res.send(archivedFromDB);
  } catch (error) {
    handleError(res, error);
  }
});

/***** unique number *****/

const generateUniqueNumber = async () => {
  try {
    const random = lodash.random(1, 3);
    const isExist = await Test.findOne({ age: random }, { age: 1, _id: 0 });
    if (isExist) return generateUniqueNumber();
    return Promise.resolve(random);
  } catch (error) {
    return Promise.reject(`Mongoose Error: ${error.message}`);
  }
};

// generateUniqueNumber()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// app.put("/", async (req, res) => {
//   try {
//     const user =
//   } catch (error) {}
// });

/***** Aggregation Operations *****/
app.patch("/changeBizStatus/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pipeline = [{ $set: { isBusiness: { $not: "$isBusiness" } } }];
    const configuration = { new: true };

    const userFromBd = await Test.findByIdAndUpdate(
      id,
      pipeline,
      configuration
    );
    if (!userFromBd)
      throw new Error("No user with this id was found in the database!");
    return res.send(userFromBd);
  } catch (error) {
    return handleError(res, error);
  }
});

app.patch("/changeBizStatus/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const isExist = await Test.findById(id);
    if (!isExist)
      throw new Error("No user with this id was found in the database!");

    const userFromDB = await Test.findByIdAndUpdate(
      id,
      { isBusiness: !isExist.isBusiness },
      { new: true }
    );
    return res.send(userFromDB);
  } catch (error) {
    return handleError(res, error);
  }
});

app.use((err, req, res, next) => {
  console.error(chalk.redBright(err.message));
  res.status(500).send(err.message);
});

// const array = [
//   { first: "shula", last: "zaken", age: 55 },
//   { first: "hadas", last: "kline", age: 63 },
//   { first: "jesika", last: "rabbit", age: 18 },
//   { first: "jesika", last: "chohen", age: 27 },
// ];

// const result = array.filter(item => item.age >= 30);
// console.log(result);

// const mapped = result.map(item => {
//   const { last } = item;
//   return { last };
// });

// console.log(mapped);

// app.post("/", async (req, res) => {
//   try {
//     const dataFromCli = req.body;
//     const newTest = new Test(dataFromCli);
//     await newTest.save();
//     return res.send(newTest);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
//     res.status(400).send(error.message);
//   }
// });

/////// exe ////////

// app.get("/", async (req, res) => {
//   try {
//     const formDb = await Test.find();
//     res.send(formDb);
//   } catch (error) {
//     handleError(res, error);
//   }
// });
// app.post("/", async (req, res) => {
//   try {
//     const dataFromReqBody = req.body;
//     const user = new Test(dataFromReqBody);
//     await user.save();
//     return res.send(user);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
//     res.status(400).send(error.message);
//   }
// });
// app.get("/exe2", async (req, res) => {
//   try {
//     const getBigAge = await Test.find({ age: { $gte: 18 } }, { _id: 1 });
//     res.send(getBigAge);
//   } catch (error) {
//     handleError(res, error);
//   }
// });

// app.get("/getFirstNameByFamily", async (req, res) => {
//   try {
//     const { last } = req.query;
//     const isExist = await Test.findOne({ last }, { first: 1, _id: 0 });
//     if (!isExist) throw new Error("cant find a name with this last name");
//     res.send(isExist);
//   } catch (error) {
//     handleError(res, error);
//   }
// });
app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newFirstName = req.body;
    const update = await Test.findByIdAndUpdate(id, newFirstName, {
      new: true,
    });
    if (!update) throw new Error("cant find this id ");
    res.send(update);
  } catch (error) {
    handleError(res, error);
  }
});
// app.delete("/delete/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const update = await Test.findByIdAndDelete(id);
//     if (!update) throw new Error("cant find this id ");
//     res.send(update);
//   } catch (error) {
//     handleError(res, error);
//   }
// });
// app.get("/getall", async (req, res) => {
//   try {
//     const all = await Test.find({}).sort({ last: 1 }).select(["last", "-_id"]);
//     res.send(all);
//   } catch (error) {
//     handleError(res, error);
//   }
// });

// const likeCard = async (req, res) => {
//   try {
//     const { cardId } = req.params;
//     const userId = req.body.user_id;
//     const pipline = (userid) => {
//       const p = [{ likes: { $elemMatch: { $eq: userid } } }];

//       console.log(p);
//       console.log(!!p);
//       const push = { $push: { likes: userid } };
//       const pull = { $pull: { likes: userid } };
//       if (p === userId) return push;
//       return pull;
//     };

//     // const pipline = {
//     //   $cond: {
//     //     if: { likes: { $elemMatch: userId } },
//     //     then: { $pull: { likes: userId } },
//     //     else: { $push: { likes: userId } },
//     //   },
//     // };
//     // console.log(pipline());

//     // const pipline = { $push: { likes: userId } };
//     // const piplinee = () => {
//     //   const a = { $pull: { likes: userId } };
//     //   console.log(a);
//     //   return a;
//     // };
//     const configuration = { new: true };
//     const CardFromDB = await Card.findByIdAndUpdate(
//       cardId,
//       pipline(userId),
//       configuration
//     );

//     if (!CardFromDB)
//       throw new Error(
//         "Could not update this card because a card with this ID cannot be found in the database"
//       );
//     res.send(CardFromDB);
//   } catch (error) {
//     handleError(res, 404, error);
//   }
// };

app.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.body.user_id;
    const pipline = { $push: { like: userId } };
    const configuration = { new: true };

    const ma = [{ $match: { like: userId } }];
    const CardFromDB = await Test.findByIdAndUpdate(id, pipline, configuration);
    if (!CardFromDB) throw new Error("cant find this id ");
    res.send(CardFromDB);
  } catch (error) {
    handleError(res, error);
  }
});

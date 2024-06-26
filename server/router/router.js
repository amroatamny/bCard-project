const express = require("express");
const router = express.Router();
const cardsRoutes = require("../cards/routes/cardsRoutes");
const userRoutes = require("../user/router/usersRouter");
const { handleError } = require("../utils/handleErrors");

router.use("/user", userRoutes);
router.use("/cards", cardsRoutes);
router.use((req, res) => handleError(res));

module.exports = router;

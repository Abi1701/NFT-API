const express = require("express");
const router = express.Router();
const userRoute = require("./userRoute");
const itemRoute = require("./itemRoute");

router.use("/user", userRoute);
router.use("/items", itemRoute);

module.exports = router;

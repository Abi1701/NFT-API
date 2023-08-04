const express = require("express");
const router = express.Router();
const { register, login, findOne } = require("../controller/userController");
const auth = require("../middleware/authMiddleware");
const userMiddleware = require("../middleware/userMiddleware");

router.post("/api/register", [userMiddleware.checkUser], register);
router.post("/api/login", login);
router.get("/api/:id", auth, findOne);

module.exports = router;

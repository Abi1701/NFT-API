const express = require("express");
const router = express.Router();
const {
	createItem,
	findProduct,
	updateItemsName,
	updateItemsPrice,
	updateItemsDescription,
	deleteItems,
} = require("../controller/itemController");
const itemMiddleware = require("../middleware/itemMiddleware");

router.post("/api/createItem", [itemMiddleware.checkItem], createItem);
router.put("/api/updateItemsName", [itemMiddleware.checkItem], updateItemsName);
router.put(
	"/api/updateItemsPrice",
	[itemMiddleware.checkPrice],
	updateItemsPrice
);
router.put(
	"/api/updateItemsDescription",
	[itemMiddleware.checkDescription],
	updateItemsDescription
);
router.get("/api/:id", findProduct);
router.delete("/api/:id", deleteItems);

module.exports = router;

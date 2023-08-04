const db = require("../model/indexModel");

class itemsValidation {
	async checkItem(req, res, next) {
		try {
			let itemName = db.database.items.findOne({
				where: {
					itemName: req.body.itemName,
				},
			});
			if (itemName) {
				return res.status(404).send({
					message: "Item already exist",
				});
			}
			if (!itemName) {
				return res.status(200).send({
					message: "Item Sended to Database",
				});
			}
			next();
		} catch (error) {
			return res.status(500).send({
				message: "Internal server error",
			});
		}
	}
	async checkPrice(req, res, next) {
		try {
			let itemPrice = db.database.items.findOne({
				where: {
					itemPrice: req.body.itemPrice,
				},
			});
			if (itemPrice) {
				return res.status(404).send({
					message: "Price same as before",
				});
			}
			if (!itemPrice) {
				return res.status(200).send({
					message: "Price has been updated",
				});
			}
			next();
		} catch (error) {
			return res.status(500).send({
				message: "Internal Server Error",
			});
		}
	}
	async checkDescription(req, res, next) {
		try {
			let itemDescription = db.database.items.findOne({
				where: {
					itemDescription: req.body.itemDescription,
				},
			});
			if (!itemDescription) {
				return res.status(200).send({
					message: "Description has been updated",
				});
			}
			next();
		} catch (error) {
			return res.status(500).send({
				message: "Internal Server Error",
			});
		}
	}
}
module.exports = new itemsValidation();

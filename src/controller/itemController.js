const db = require("../model/indexModel");

class Items {
	async createItem(req, res) {
		try {
			await db.database.items.create({
				itemName: req.body.itemName,
				itemPrice: req.body.itemPrice,
				itemDescription: req.body.itemDescription,
				productImage: req.body.productImage,
			});
			res.status(200).send({
				message: "Item has been send to Database",
			});
		} catch (error) {
			res.status(500).send({
				error: "Internal Server Error",
			});
		}
	}
	async findProduct(req, res) {
		const items = db.database.items.findOne({
			where: {
				id: req.items.id,
			},
		});
		res.status(200).send({
			id: items.id,
			productName: items.productName,
			productPrice: items.productPrice,
			marketPlace: items.marketPlace,
			productDescription: items.productDescription,
		});
	}
	catch(error) {
		res.status(500).send({
			message: error.message || "something went wrong",
		});
	}
	async updateItemsName(req, res) {
		try {
			await db.database.items.update({
				itemsName: req.body.itemsName,
				itemsPrice: req.body.itemsPrice,
				itemsDescription: req.body.itemsDescription,
			});
			res.status(200).send({
				message: "Items Update Successfully",
			});
		} catch (error) {
			res.status(500).send({
				message: "Error Items Product",
			});
		}
	}
	async updateItemsPrice(req, res) {
		try {
			await db.database.items.update({
				itemsPrice: req.body.itemsPrice,
			});
			res.status(200).send({
				message: "Items Update Successfully",
			});
		} catch (error) {
			res.status(500).send({
				message: "Error Items Product",
			});
		}
	}
	async updateItemsDescription(req, res) {
		try {
			await db.database.items.update({
				itemsDescription: req.body.itemsDescription,
			});
			res.status(200).send({
				message: "Items Update Successfully",
			});
		} catch (error) {
			res.status(500).send({
				message: "Error Items Product",
			});
		}
	}
	async deleteItems() {
		try {
			await db.database.items.destroy({
				where: {
					id: req.items.id,
				},
			});
			res.status(200).send({
				message: "Deleted Item Successfully",
			});
		} catch (error) {
			res.status.send(500).send({
				message: "Failed delete items",
			});
		}
	}
}
module.exports = new Items();

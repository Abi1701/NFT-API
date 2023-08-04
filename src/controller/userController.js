const db = require("../model/indexModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class Account {
	async register(req, res) {
		try {
			await db.database.user.create({
				username: req.body.username,
				email: req.body.email,
				password: bcrypt.hashSync(req.body.password, 8),
			});
			res.status(200).send({ message: "Register Success" });
		} catch (error) {
			res.status(500).send({ message: "Register Failed" });
		}
	}
	async login(req, res) {
		try {
			const user = await db.database.user.findOne({
				where: {
					username: req.body.username,
				},
			});
			if (!user) {
				return res
					.status(404)
					.send({ message: "User didn't have place in here" });
			}

			const passwordIsValid = bcrypt.compareSync(
				req.body.password,
				user.password
			);

			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: "Invalid Password!",
				});
			}

			const token = jwt.sign({ id: user.id }, "nftstore", {
				expiresIn: 86400, // 24 hours
			});

			return res.status(200).send({
				id: user.id,
				username: user.username,
				accessToken: token,
			});
		} catch (error) {
			return res.status(500).send({
				message: error.message || "Error Detected find the error",
			});
		}
	}
	async findOne(req, res) {
		try {
			const user = await db.database.user.findOne({
				where: {
					id: req.user.id,
				},
			});
			res.status(200).send({
				id: user.id,
				username: user.username,
			});
		} catch (error) {
			res.status(500).send({
				message: error.message || "You don't have Authorized Account",
			});
		}
	}
}
module.exports = new Account();

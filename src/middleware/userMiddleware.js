const db = require("../model/indexModel");

class userMiddleware {
	async checkUser(req, res, next) {
		try {
			let username = await db.database.user.findOne({
				where: {
					username: req.body.username,
				},
			});
			if (username) {
				return res.status(401).send({
					message: "Failed this Username Has been Taken by Another User",
				});
			}
			if (!username) {
				return res.status(200).send({
					message: "Username is Available to Use",
				});
			}
			let email = await db.database.user.findOne({
				where: {
					email: req.body.email,
				},
			});
			if (email) {
				return res.status(401).send({
					message: "Failed this Email Has been Used",
				});
			}
			if (!email) {
				return res.status(200).send({
					message: "Email is Available to Use",
				});
			}
			next();
		} catch (error) {
			return res.status(500).send({
				message: "Oops something went wrong! check your network",
			});
		}
	}
}
module.exports = new userMiddleware();

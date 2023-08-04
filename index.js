const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const db = require("./src/model/indexModel.js");
const router = require("./src/route/indexRoute.js");
const passport = require("./src/utils/passport.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(passport.initialize());

db.sequelize
	.sync()
	.then(() => {
		console.log("Synced db.");
	})
	.catch((err) => {
		console.log("Failed to sync db: " + err.message);
	});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

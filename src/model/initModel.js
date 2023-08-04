const DataTypes = require("sequelize").DataTypes;
const _user = require("./userModel.js");
const _items = require("./nftModel.js");

function initModels(sequelize) {
	const user = _user(sequelize, DataTypes);
	const items = _items(sequelize, DataTypes);

	user.hasMany(items, { as: "items", foreignKey: "id_items" });
	items.belongsTo(user, { as: "user", foreignKey: "id_user" });
	return {
		user,
		items,
	};
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"items",
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				defaultValue: sequelize.literal("uuid_generate_v4()"),
				primaryKey: true,
			},
			itemName: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			itemPrice: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			itemDescription: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			productImage: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			created_at: {
				type: DataTypes.DATE,
				allowNull: true,
				defaultValue: sequelize.literal("timezone('utc'::text, now())"),
			},
			updated_at: {
				type: DataTypes.DATE,
				allowNull: true,
				defaultValue: sequelize.literal("timezone('utc'::text, now())"),
			},
		},
		{
			sequelize,
			tableName: "items",
			schema: "public",
			timestamps: false,
			indexes: [
				{
					name: "items_pkey",
					unique: true,
					fields: [{ name: "id" }],
				},
			],
		}
	);
};

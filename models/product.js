"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsToMany(models.order, {
        through: "orderItems",
        foreignKey: "product_id",
      });
      //product.belongsTo(models.categories);
    }
  }
  product.init(
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      priceInEuroCents: DataTypes.INTEGER,
      inStock: DataTypes.BOOLEAN,
      // status: DataTypes.ENUM(["in stock ", "out of stock"]),
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(order);
    }
  }
  products.init(
    {
      name: DataTypes.STRING,
      catagory: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      priceInEuroCents: DataTypes.INTEGER,
      inStock: DataTypes.BOOLEAN,
      // status: DataTypes.ENUM(["in stock ", "out of stock"]),
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  return product;
};

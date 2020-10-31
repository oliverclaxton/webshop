const express = require("express");
const Product = require("../models/").product;
const Category = require("../models/").category;
const { Router } = express;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, category, priceInEuroCents, inStock } = req.body;
    if (!name || !category || !priceInEuroCents || !inStock) {
      res.status(400).send("missing parameters");
    } else {
      const newProduct = await Product.create({
        name,
        category,
        priceInEuroCents,
        inStock,
      });
      res.json(newProduct);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/category/:categoryId", async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    console.log(categoryId);
    const category = await Category.findByPk(categoryId, {
      include: [Product],
    });
    res.json(category);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;

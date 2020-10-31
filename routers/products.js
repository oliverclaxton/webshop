const express = require("express");
const Product = require("../models/").product;

const { Router } = express;

const router = new Router();

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

module.exports = router;

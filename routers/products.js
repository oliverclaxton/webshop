const express = require("express");
const Product = require("../models/").product;
const Category = require("../models/").category;
const authMiddleware = require("../auth/middleware");

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

// router.post("/", async (req, res, next) => {
//   try {
//     const { name, category, priceInEuroCents, inStock } = req.body;
//     if (!name || !category || !priceInEuroCents || !inStock) {
//       res.status(400).send("missing parameters");
//     } else {
//       const newProduct = await Product.create({
//         name,
//         category,
//         priceInEuroCents,
//         inStock,
//       });
//       res.json(newProduct);
//     }
//   } catch (e) {
//     console.log(e.message);
//     next(e);
//   }
// });

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

router.post("/", authMiddleware, async (req, res, next) => {
  if (!req.user.isAdmin) {
    res.status(401).send("You are not an admin");
    return;
  }
  console.log("user", req.user);
  try {
    const {
      name,
      categoryId,
      image,
      description,
      priceInEuroCents,
      inStock,
    } = req.body;

    console.log(
      "parameters",
      name,
      categoryId,
      image,
      description,
      priceInEuroCents,
      inStock
    );

    if (
      !name ||
      !categoryId ||
      !image ||
      !description ||
      !priceInEuroCents ||
      !inStock
    ) {
      res.status(400).send("missing parameters");
    }

    const newProduct = await Product.create({
      name,
      categoryId,
      image,
      description,
      priceInEuroCents,
      inStock,
    });
    res.status(200).send(`${name} added to the inventory`);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

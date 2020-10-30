const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/").user;

const { Router } = express;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    //const limit = Math.min(req.query.limit  2, 15);
    //const offset = req.query.offset  0;
    // User.findAndCountAll({ limit, offset })
    //   .then((result) => res.send({ images: result.rows, total: result.count }))
    //   .catch((error) => next(error));
    const users = await User.findAll();
    res.json(users);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      address,
      email,
      phone,
      password,
      isAdmin,
    } = req.body;
    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !address ||
      !phone ||
      !isAdmin
    ) {
      res.status(400).send("missing parameters");
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await User.create({
        firstName,
        lastName,
        address,
        phone,
        email,
        password: hashedPassword,
        isAdmin,
      });
      res.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});
module.exports = router;

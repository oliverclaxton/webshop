const { Router } = require("express");
//const bcrypt = require("bcrypt");
const User = require("../models/").user;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    //const limit = Math.min(req.query.limit || 2, 15);
    //const offset = req.query.offset || 0;
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
  console.log("req.body", req.body);
  try {
    console.log("req.body", req.body);
    // const {
    //   firstName,
    //   lastName,
    //   address,
    //   email,
    //   phone,
    //   password,
    //   isAdmin,
    // } = req.body;
    // switch (true) {
    //   case !firstName:
    //     res.status(401).send("I need a valid full name");
    //     return;
    //   case !email:
    //     res.status(401).send("I need an email");
    //     return;
    //   case !password:
    //     res.status(401).send("Give me a password you dimwit");
    //     return;
    // }

    // const newUser = await User.create({
    //   firstName,
    //   lastName,
    //   address,
    //   email,
    //   phone,
    //   password,
    //   isAdmin,
    // });
    // const { password: myPassword, id, ...restOfUser } = newUser.dataValues;
    // res.json(restOfUser);
    res.send(req.body);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

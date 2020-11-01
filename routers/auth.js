const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const bcrypt = require("bcrypt");
const User = require("../models").user;

const router = new Router();

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({
      message: "Please supply a valid email and password",
    });
    return;
  }
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) {
    res.status(400).send({
      message: "User with that email does not exist",
    });
    return;
  }
  if (bcrypt.compareSync(password, user.password)) {
    // 3. if the password is correct, return a JWT with the userId of the user (user.id)
    const jwt = toJWT({ userId: user.id });
    res.send({
      jwt,
    });
  } else {
    res.status(400).send({
      message: "Password was incorrect",
    });
  }
});

module.exports = router;

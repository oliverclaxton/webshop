const User = require("../models").user;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  // 1. check for authorization header and "split" it.
  if (!req.headers.authorization) {
    res.status(401).send("Please give some valid credentials");
    return;
  }
  const auth = req.headers.authorization.split(" ");

  // 2. if authorization header is there, auth type is Bearer and we have something at auth[1] we proceed to check the token.
  if (!auth || auth[0] !== "Bearer" || !auth[1]) {
    res.status(401).send("Please supply some valid credentials");
    return;
  }
  try {
    const validToken = toData(auth[1]);
    const user = await User.findByPk(validToken.userId);
    if (!user) {
      res.status(404).send("No user found");
      return;
    }

    req.user = user;
    next();
  } catch (e) {
    res.status(401).send(e);
  }
}

module.exports = auth;

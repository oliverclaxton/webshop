const express = require("express");
const usersRouter = require("./routers/users");
const productsRouter = require("./routers/products");
const loginRouter = require("./routers/auth");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use("/auth", loginRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
//app.use("/login", loginRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

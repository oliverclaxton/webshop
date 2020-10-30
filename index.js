const express = require("express");
const usersRouter = require("./routers/users");
const productsRouter = require("./routers/products");

const app = express();
const port = 4000;

app.use(express.json());
app.use("/users", usersRouter);
app.use("/products", productsRouter);
//app.use("/login", loginRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

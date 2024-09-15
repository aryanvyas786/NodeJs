const express = require("express");
const userRouter = require("./routes/userRoute");

const app = express();

require("dotenv").config();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World !</h1>");
});

app.use("/users", userRouter);

app.get("/nodejs", (req, res) => {
  let pathname = req.path;
  pathname = pathname.split("/");
  pathname = pathname.splice(1, 1);
  console.log("nodejs");

  res.send(`<h1>Your current path is ${pathname}</h1>`);
});

const variables = process.env.NODE_ENV || "development";

app.listen(port, () => {
  console.log(`App is running on port : ${port}`);
});

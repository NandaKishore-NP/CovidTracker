// app.js
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("./models/db");
const userRouter = require("./routes/user");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "your-secret-key",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.render("home", { user: req.session.user || null });
});
app.post("/cityname", (req, res) => {
  try {
    const { city, year } = req.body;

    res.send("Check City and Year");
  } catch (err) {
    console.log("error", err);
  }
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

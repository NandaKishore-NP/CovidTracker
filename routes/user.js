// routes/user.js
const express = require("express");
const covid = require("../models/covid_details");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login", { message: "" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
});



router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;

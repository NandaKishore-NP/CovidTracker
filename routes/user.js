// routes/user.js
<<<<<<< HEAD
const express = require("express");
const covid = require("../models/covid_details");
const router = express.Router();
=======
const express = require('express');

const router = express.Router(); // Make sure to define the router
const {Register} = require('../models/user_login')

const router = express.Router();
const User = require('../models/user_login');

>>>>>>> 9658aacdd0862c6ddb178d2f2c121734d34e2761

router.get("/login", (req, res) => {
  res.render("login", { message: "" });
});

<<<<<<< HEAD
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
=======
router.post('/login', async (req, res) => {
  // Your authentication logic using the User model
});


router.get('/register', (req, res) => {
  res.render('register', { message: '' });

});

router.post('/register', (req, res) => {
  const { username,phoneNum,email, password } = req.body;
  try{
   Register.create({username,phoneNum,email, password})
    res.redirect('/login')
  }catch{
    res.status(404).send("Oh uh, something went wrong")
  }
 

>>>>>>> 9658aacdd0862c6ddb178d2f2c121734d34e2761
});



<<<<<<< HEAD
router.get("/logout", (req, res) => {
=======

router.get('/logout', (req, res) => {
>>>>>>> 9658aacdd0862c6ddb178d2f2c121734d34e2761
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

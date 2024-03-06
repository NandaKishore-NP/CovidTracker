// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/user_login');

router.get('/login', (req, res) => {
  res.render('login', { message: '' });
});

router.post('/login', async (req, res) => {
  // Your authentication logic using the User model
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;

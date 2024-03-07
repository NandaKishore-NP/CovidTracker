// routes/register.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  const { username, email, password, isAdmin } = req.body;

  try {
    // Check if isAdmin checkbox is checked
    const role = isAdmin === 'true' ? 'admin' : 'user'; // Check for string value 'true'

    const newUser = new User({ username, email, password, role });
    await newUser.save();
    res.redirect('/login');
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

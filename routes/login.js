const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    if (username && password) {
      const user = await User.findOne({ username, password });

      if (user) {
        // Check user role and redirect accordingly
        if (user.role === 'user') {
          return res.redirect('home');
        } else if (user.role === 'admin') {
          return res.redirect('/admin/dashboard');
        }
      }
    }

    // Incorrect credentials - set the error variable
    res.render('login', { error: 'Incorrect credentials. Please try again.' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

// routes/user.js
const express = require('express');
const router = express.Router(); // Make sure to define the router

router.get('/login', (req, res) => {
  res.render('login', { message: '' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
});

  // try {
  //   // Your authentication logic here

  //   if (/* authentication succeeds */) {
  //     req.session.user = user;
  //     res.redirect('/');
  //   } else {
  //     res.render('login', { message: 'Invalid credentials' });
  //   }
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send('Internal Server Error');
  // }

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

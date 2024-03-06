// routes/user.js
const express = require('express');

const router = express.Router(); // Make sure to define the router
const {Register} = require('../models/user_login')

const router = express.Router();
const User = require('../models/user_login');


router.get('/login', (req, res) => {
  res.render('login', { message: '' });
});

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
 

});
app.get('/highest_death_rates/:country', async (req, res) => {
  const { country } = req.params;

  try {
    const highestDeathRates = await Death.aggregate([
      { $match: { country: country } },
      { $group: { _id: { $month: '$date' }, maxDeathRate: { $max: '$deathRate' } } }
    ]);
    res.json(highestDeathRates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
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

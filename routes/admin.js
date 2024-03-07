// routes/admin.js

const express = require('express');
const router = express.Router();
const User = require('../models/user_login'); 


router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.render('admin_view', { users });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/users/edit/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render('edit_user', { user });
  } catch (error) {
    console.error('Error fetching user data for editing:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/users/edit/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect('/admin/users'); 
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).send('Internal Server Error');
  }
});


router.post('/users/delete/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/admin/users'); 
  } catch (error) {
    console.error('Error deleting user data:', error);
    res.status(500).send('Internal Server Error');
  }
});



module.exports = router;

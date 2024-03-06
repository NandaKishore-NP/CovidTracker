// models/user_login.js
const mongoose = require('mongoose'); // Correct import

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

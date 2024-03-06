// models/user_login.js
const mongoose = require('./db');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role: String, // 'admin' or 'user'
})

const User = mongoose.model('User', userSchema);

module.exports = User;

const mongoose = require('mongoose');
require('./db'); // Correct import


const mongoose = require('./db');


const userSchema = new mongoose.Schema({
  username: String,
  password: String,

  role: String,
});
const registerSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,

  email: String,
  role: String, // 'admin' or 'user'

})

const User = mongoose.model('User', userSchema);
const Register = mongoose.model('Register', registerSchema);

module.exports = {
  User,
  Register
};

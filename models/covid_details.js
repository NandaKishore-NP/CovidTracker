<<<<<<< HEAD
const mongoose = require("mongoose");
require("./db");

const covidSchema = new mongoose.Schema({
  city: String,
  year: Number,
  country: String,
  date: Number,
  month: Number,
  activeCase: Number,
  deathCase: Number,
  state: String,
});

const covid = mongoose.model("covid", covidSchema);

module.exports = covid;
=======
const mongoose = require('mongoose');
<<<<<<< HEAD
require('./db')
=======
const Schema = mongoose.Schema;
>>>>>>> d467ce348391a7857af1815b5c19021c0d2e6a5e

const covidSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  deathRate: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

<<<<<<< HEAD
const covid = mongoose.model('covids', covidSchema);
=======
const CovidDetails = mongoose.model('CovidDetails', covidSchema);
>>>>>>> d467ce348391a7857af1815b5c19021c0d2e6a5e

module.exports = CovidDetails;
>>>>>>> 9658aacdd0862c6ddb178d2f2c121734d34e2761

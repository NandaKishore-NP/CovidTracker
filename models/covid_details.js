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
const Schema = mongoose.Schema;

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

const CovidDetails = mongoose.model('CovidDetails', covidSchema);

module.exports = CovidDetails;
>>>>>>> 9658aacdd0862c6ddb178d2f2c121734d34e2761

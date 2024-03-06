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

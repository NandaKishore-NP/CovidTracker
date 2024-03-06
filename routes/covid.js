// routes/covid.js
const express = require('express');
const router = express.Router();
const CovidData = require('../models/covid_details');

router.get('/city-view', (req, res) => {
  res.render('city_view');
});

// Add other COVID-related routes based on your requirements

module.exports = router;

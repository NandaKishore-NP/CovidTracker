// routes/covid.js

const express = require('express');
const router = express.Router();
const CovidDetails = require('../models/covid_details');

// Route to render the City Tracker view
router.get('/city-tracker', async (req, res) => {
  try {
    // Fetch all city data from MongoDB
    const cityData = await CovidDetails.find({});
    
    // Extract unique city names
    const cityNames = Array.from(new Set(cityData.map(data => data.cityName)));

    res.render('city_view', { cityData, cityNames });
  } catch (error) {
    console.error('Error fetching city data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Add more routes or functionalities related to COVID tracker as needed

module.exports = router;

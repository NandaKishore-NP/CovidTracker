<<<<<<< HEAD
=======
// routes/covid.js

>>>>>>> d467ce348391a7857af1815b5c19021c0d2e6a5e
const express = require('express');
const router = express.Router();
const CovidDetails = require('../models/covid_details');

<<<<<<< HEAD


router.post("/countryname", async (req, res) => {
    console.log(req.body);
    const { state } = req.body;
    const countryDetails = await CovidData.find({ state });
    res.render("worldwide_data", { countryDetails });
    console.log(countryDetails);
});

router.get("/countryname", (req, res) => {
  res.render("worldwide_data", { countryDetails: [] });
});
=======
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
>>>>>>> d467ce348391a7857af1815b5c19021c0d2e6a5e

module.exports = router;

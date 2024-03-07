const express = require('express');
const router = express.Router();
const CovidData = require('../models/covid_details');



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

module.exports = router;

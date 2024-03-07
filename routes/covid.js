

const express = require('express');
const router = express.Router();
const CovidDetails = require('../models/covid_details');



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

// Route to render the City Tracker view
router.get('/city-tracker', async (req, res) => {
  try {
    // Fetch all city data from MongoDB
    const cityData = await CovidDetails.find({});
    
    // Extract unique city names
    const cityNames = Array.from(new Set(cityData.map(data => data.cityName)));

const express = require('express');
const router = express.Router();
const CovidData = require('../models/covid_details');


router.get('/city-view', (req, res) => {
  res.render('city_view');
});


//Dateaise Search;
router.post("/datewise",async(req,res)=>{
  const {date} = req.body;
  //console.log(date)
  const covidDetails= await CovidData.find({date});
  //console.log(covidDetails)
  res.render("datewise_data",{covidDetails})
  });
  
  
  router.get("/datewise",async(req,res)=>{
    res.render("datewise_data",{covidDetails:[]});
     })
  




module.exports = router;

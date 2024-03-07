// routes/covid.js
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
  


// Add other COVID-related routes based on your requirements

module.exports = router;

// routes/covid.js
const express = require("express");
const router = express.Router();
const covid = require("../models/covid_details");

// router.get("/city-view", (req, res) => {
//   res.render("city_view");
// });

// Add other COVID-related routes based on your requirements
 
router.post("/city_view", async (req, res) => {
  const { id, city, month } = req.body;
  const cityDetails = await covid.find({ city, month });
  
  res.render("city_view", { cityDetails });
});
router.get("/city_view", (req, res) => {
  res.render("city_view", { cityDetails: [] });
});





router.post("/datewise_data", async (req, res) => {
  const { date } = req.body;
  const dateDetails = await covid.find({   date });
 
  res.render("datewise_data", { dateDetails });
});
router.get("/datewise_data", (req, res) => {
  res.render("datewise_data", { dateDetails: [] });
});



router.post("/worldwide_data", async (req, res) => {
  console.log(req.body);
  const { state } = req.body;
  const countryDetails = await covid.find({ state });
  res.render("worldwide_data", { countryDetails });
  console.log(countryDetails);
});

router.get("/worldwide_data", (req, res) => {
res.render("worldwide_data", { countryDetails: [] });
});


module.exports = router;

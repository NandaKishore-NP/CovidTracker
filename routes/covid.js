// routes/covid.js
const express = require("express");
const router = express.Router();
const covid = require("../models/covid_details");

// router.get("/city-view", (req, res) => {
//   res.render("city_view");
// });

// Add other COVID-related routes based on your requirements
 
router.post("/cityname", async (req, res) => {
  const { id, city, month } = req.body;
  const cityDetails = await covid.find({ city, month });
  res.render("city_view", { cityDetails });
});
router.get("/cityname", (req, res) => {
  res.render("city_view", { cityDetails: [] });
});
module.exports = router;

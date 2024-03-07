const mongoose = require('mongoose');
require('./db')

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

const covid = mongoose.model('covids', covidSchema);

module.exports = covid;
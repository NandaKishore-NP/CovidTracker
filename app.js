// app.js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('./models/db');
const userRouter = require('./routes/user');
const covidRouter = require('./routes/covid');
const covid =require('./models/covid_details')
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');



app.use('/user', userRouter,covidRouter);
app.use("/assests",express.static(path.join(__dirname,"assests")));
app.get('/', (req, res) => {
  res.redirect('home', { user: req.session.user || null });
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

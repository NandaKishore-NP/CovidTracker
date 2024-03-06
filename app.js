// app.js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('./models/db');
const userRouter = require('./routes/user');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true,
}));

app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.render('home', { user: req.session.user || null });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

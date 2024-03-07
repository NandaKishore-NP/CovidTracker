const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const covidRouter = require("./routes/covid");
const covid = require("./models/covid_details");
// const userRouter = require("./routes/user");

const app = express();

mongoose.connect('mongodb://localhost:27017/covidTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(-1);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use('/assests', express.static(path.join(__dirname, 'assests')));

const User = require('./models/user');

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

app.use(loginRouter);
app.use(registerRouter);
app.use("/user", covidRouter);

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/admin/dashboard', async (req, res) => {
  try {
    const users = await User.find();
    res.render('adminDashboard', { users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/admin/create', (req, res) => {
  res.render('createUser');
});

app.post('/admin/create', async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const newUser = new User({ username, email, password, role });
    await newUser.save();
    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/admin/edit/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render('editUser', { user });
  } catch (error) {
    console.error('Error fetching user for edit:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/admin/edit/:id', async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    await User.findByIdAndUpdate(req.params.id, { username, email, password, role });
    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/admin/delete/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const result = await User.deleteOne({ _id: userId });

    // delete user
    if (result.deletedCount === 0) {
      return res.status(500).send('Failed to delete user');
    }

    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/home', (req, res) => {
  res.render('home', { user: req.user });
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// app.js
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("./models/db");
const userRouter = require("./routes/user");
=======
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();


app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
=======

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))




app.use(
  session({
    secret: "your-secret-key",
    resave: true,
    saveUninitialized: true,
  })
);


app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.render("home", { user: req.session.user || null });
=======
// Connect to MongoDB with updated options
// Connect to MongoDB without useFindAndModify option
mongoose.connect('mongodb://localhost:27017/admin_dashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(-1);
});

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Define User model
const User = require('./models/user');

// Redirect root path to the admin dashboard
app.get('/', (req, res) => {
  res.redirect('/admin/dashboard');
});

// Routes
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

    // Check if the user with the provided ID exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Delete the user using findOneAndRemove
    await User.findOneAndRemove({ _id: userId });
    
    // Alternatively, you can use deleteOne
    // await User.deleteOne({ _id: userId });

    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send('Internal Server Error');
  }
});


//Dateaise Search;
app.get("/datewise",async(req,res)=>{
 res.render("datewise_data")
  })

app.get("/datewise/:date",async(req,res)=>{
  const requesteDate=new date(req.params.date)
  try{
    const data= await covid.find({covid:requesteDate})
    if (!covid) {
      return res.status(404).json({ message: 'No COVID data found for the given date' });
  }

  res.json(data);
} catch (error) {
  res.status(500).json({ message: 'Internal server error' });
}

});
app.post("/cityname", (req, res) => {
  try {
    const { city, year } = req.body;

    res.send("Check City and Year");
  } catch (err) {
    console.log("error", err);
  }
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
=======
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

});

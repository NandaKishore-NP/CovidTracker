<<<<<<< HEAD
const mongoose = require('mongoose')
// const schema =require('./covid_details')


     mongoose.connect("mongodb://localhost:27017/covidTracker", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(()=>console.log("Connected to Mongodb"))
    .catch((err)=>console.Consolelog("error"))
    



module.exports ;
=======

// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

// let database;

function connectDB() {
  try {
    const client = mongoose
      .connect("mongodb://127.0.0.1/CovidTracker", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to MongoDB..."))
      .catch((err) => console.error("Could not connect to MongoDB...", err));

    // database = client.db(dbName);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// function getDB() {
//   if (!database) {
//     console.error("Database not connected. Call connectDB() first.");
//   }
//   return database;
// }

module.exports = {
  connectDB,
  // getDB,
};
=======
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Regester")
.then(()=>{
    console.log("mongodb connectrd")
}).catch((err)=>{console.log(err)})


module.exports

// Connection URI for your MongoDB database
const uri = 'mongodb://localhost/covidTracker';

// Create a MongoDB client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to connect to the MongoDB database
async function connectToDatabase() {
  try {
    // Connect to the database
    await client.connect();
    console.log('Connected to the database');
    
    // Return the connected client and database
    return { client, database: client.db() };
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

// Function to close the MongoDB connection
async function closeConnection() {
  try {
    // Close the connection
    await client.close();
    console.log('Connection to the database closed');
  } catch (error) {
    console.error('Error closing the database connection:', error);
    throw error;
  }
}

// Export the functions for use in other files
module.exports = { connectToDatabase, closeConnection };

>>>>>>> d467ce348391a7857af1815b5c19021c0d2e6a5e

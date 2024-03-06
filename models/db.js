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

const { MongoClient } = require('mongodb');

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

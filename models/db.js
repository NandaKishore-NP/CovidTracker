const { MongoClient } = require('mongodb');

let database;

async function connectDB() {
  try {
    const client = await MongoClient.connect(`mongodb://localhost/27017${mongoHost}:${mongoPort}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    database = client.db(dbName);

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

function getDB() {
  if (!database) {
    console.error('Database not connected. Call connectDB() first.');
  }
  return database;
}

module.exports = {
  connectDB,
  getDB,
};

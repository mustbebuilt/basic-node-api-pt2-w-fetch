// Import the necessary modules
const { db } = require('../db');
const ObjectId = require("mongodb").ObjectId; 
const collection = db.collection('filmsCollection');
// Define the controller function
async function getAllData() {
  try {
    // Query the collection to retrieve all documents
    const films = await collection.find().toArray();
    return films;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return({ error: 'Failed to retrieve data' });
  }
}
async function getDataById(id) {
  try {
    // Query the collection to retrieve a document by ID
    let o_id = new ObjectId(id);
    const film  = await collection.find({ _id: o_id }).toArray();
    return film;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return({ error: 'Failed to retrieve data' });
  }
}
// Export the controller function
module.exports = {
  getAllData,
  getDataById
};

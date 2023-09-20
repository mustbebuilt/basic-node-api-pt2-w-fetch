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

async function createData(data) {
  try {
    // Insert a new document into the collection
    const result = await collection.insertOne(data);
    return {success: result.acknowledged};
  } catch (error) {
    console.error('Error creating data:', error);
    return { error: 'Failed to create data' };
  }
}

async function updateData(id, data) {
  try {
    // Update a document in the collection by ID
    const o_id = new ObjectId(id);
    const result = await collection.updateOne({ _id: o_id }, { $set: data });
    if (result.modifiedCount === 0) {
      throw new Error('No document found with the provided ID');
    }
    return { message: 'Data updated successfully' };
  } catch (error) {
    console.error('Error updating data:', error);
    return { error: 'Failed to update data' };
  }
}
async function deleteData(id) {
  try {
    // Delete a document from the collection by ID
    const o_id = new ObjectId(id);
    const result = await collection.deleteOne({ _id: o_id });
    if (result.deletedCount === 0) {
      throw new Error('No document found with the provided ID');
    }
    return { message: 'Data deleted successfully' };
  } catch (error) {
    console.error('Error deleting data:', error);
    return { error: 'Failed to delete data' };
  }
}

	   

	   
// Export the controller function
module.exports = {
  getAllData,
  getDataById,
  createData,
  updateData,
  deleteData
};

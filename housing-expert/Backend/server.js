const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5000; // Keep backend on port 3001

app.use(cors({
  origin: 'http://localhost:3000' // Update to match your React app's port
}));
app.use(express.json()); // Parse JSON requests

const uri = "mongodb+srv://AbishekSensi:jjZWwkNvQsbJMCbc@cluster0.wvgbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("Housing_Expert").collection("Properties");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit if connection fails
  }
}

// GET endpoint to fetch all properties
app.get('/api/properties', async (req, res) => {
  try {
    const propertiesCollection = await connectToDatabase();
    const properties = await propertiesCollection.find({}).toArray();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch properties" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
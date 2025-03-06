const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

const uri = "mongodb+srv://AbishekSensi:jjZWwkNvQsbJMCbc@cluster0.wvgbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function connectToDatabase(collectionName) {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("Housing_Expert").collection(collectionName);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

// GET endpoint for properties
app.get('/api/properties', async (req, res) => {
  try {
    const propertiesCollection = await connectToDatabase("Properties");
    const properties = await propertiesCollection.find({}).toArray();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch properties" });
  }
});

// GET endpoint for agents
app.get('/api/agents', async (req, res) => {
  try {
    const agentsCollection = await connectToDatabase("Agents");
    const agents = await agentsCollection.find({}).toArray();
    res.json(agents);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch agents" });
  }
});

// POST endpoint for user signup
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email, and password are required" });
    }

    const userCollection = await connectToDatabase("User_Details");
    
    // Check if user already exists
    const existingUser = await userCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists" });
    }

    // Save new user
    const newUser = { name, email, password }; // In production, hash the password!
    await userCollection.insertOne(newUser);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

// POST endpoint for user login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const userCollection = await connectToDatabase("User_Details");
    const user = await userCollection.findOne({ email, password }); // In production, compare hashed passwords!

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
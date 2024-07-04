const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const PORT = 3004;

// MongoDB Connection
const dbURI = 'mongodb+srv://wendypasiah:wendytima@cluster0.enfmewu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true, // Explicitly enable TLS
  tlsAllowInvalidCertificates: false, // Optionally, enforce certificate validity
  // tlsCAFile: '/path/to/ca-certificate.crt', // Optionally, provide CA file (comment this if not using CA file)
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// User Schema
const UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  email: { type: String, required: true },
  last_name: { type: String, required: true },
  country: { type: String, required: true },
});

const User = mongoose.model('students', UserSchema);

// Express Server Setup
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.options('*', cors()); // Enable preflight for all routes

app.get("/", (req, res) => {
  res.send("App is Working");
});

app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password; // Assuming you're not storing passwords in plain text
      res.send(result);
      console.log(result);
    } else {
      console.log("User already registered");
    }
  } catch (e) {
    console.error("Error saving user:", e);
    res.status(500).send("Something went wrong");
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

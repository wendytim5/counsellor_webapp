const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// MongoDB Connection
mongoose.connect('mongodb+srv://wendypasiah:wendytima@cluster0.enfmewu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  dbName: 'counsellor-webapp',
  useNewUrlParser: true,
  tls: true, // Explicitly enable TLS
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/User.cjs'); // Updated path
const Note = require('./models/Note.cjs'); // Updated path
const Counsellor = require('./models/counsellor.cjs'); // Updated path
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const OpenAI = require('openai');
const secretKey = 'wendytima'; // Replace with a strong secret key


const PORT = process.env.PORT || 5000
;

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

// POST a new user
app.post('/api/users', async (req, res) => {
  try {
    const { first_name, last_name, email, country } = req.body;
    const newUser = new User({ first_name, last_name, email, country });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});









// Register Route (unchanged from earlier example)
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Counsellor({ name, email, password: hashedPassword });
    await user.save();
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'There was an error registering!' });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Counsellor.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'There was an error logging in!' });
  }
});





app.get('/api/students', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    console.error('Error fetching students:', err);
    res.status(500).send('Something went wrong');
  }
});

app.get('/api/student/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'Student not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add a note for a student
app.post('/api/student/:id/notes', async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  try {
    const student = await User.findById(id);
    if (!student) {
      return res.status(404).json({ msg: 'Student not found' });
    }

    const newNote = new Note({
      studentId: id,
      content: content,
    });

    const savedNote = await newNote.save();

    // Ensure student.notes is initialized as an array if not already
    student.notes = student.notes || [];
    student.notes.push(savedNote._id);
    await student.save();

    res.json(savedNote);
  } catch (err) {
    console.error('Error saving note:', err);
    res.status(500).send('Server error');
  }
});

// Get notes for a student
app.get('/api/student/:id/notes', async (req, res) => {
  try {
    const notes = await Note.find({ studentId: req.params.id });
    res.json(notes);
  } catch (err) {
    res.status(500).send('Server error');
  }
});



// Update a note for a student
app.put('/api/student/:id/notes/:noteId', async (req, res) => {
  try {
    const { noteId } = req.params;
    const { content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { content },
      { new: true }
    );

    res.json(updatedNote);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Delete a note for a student
app.delete('/api/student/:id/notes/:noteId', async (req, res) => {
  try {
    const { noteId } = req.params;

    await Note.findByIdAndDelete(noteId);

    res.status(204).send();
  } catch (err) {
    res.status(500).send('Server error');
  }
});


// Initialize OpenAI API
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Function to assess mental health
async function assessMentalHealth(notes) {
    const prompt = `Patient notes:\n${notes}\n Based on the patients notes detrmine if the patient possess any traits of mental illnesses such as anxiety disorders, depression disorders, bipolar disorders, personality disorders, schizophrenia disorders, eating disorders, and personality disorders. :\n`;

    try {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
            messages: [{ role: "assistant", content: prompt }],
            max_tokens: 150,
            temperature: 0.7,
            top_p: 0.9,
            n: 1,
            stop: ['\n']
        });

        return response.choices[0];
    } catch (error) {
        console.error("Error assessing mental health:", error);
        throw error;
    }
}

// Route to assess student's mental health
app.post('/assess', async (req, res) => {
    const { student_id, notes } = req.body;

    try {
        // Fetch previous notes from the database
        const previousNotes = await Note.findOne({ student_id });
        let allNotes = notes;
        if (previousNotes) {
            allNotes = previousNotes.notes + " " + notes;
        }

        // Assess mental health using OpenAI API
        const assessment = await assessMentalHealth(allNotes);

        if (assessment) {
            res.json({ assessment });
        } else {
            res.status(500).json({ error: "Failed to assess mental health status." });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



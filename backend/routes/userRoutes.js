const express = require('express');
const User = require('../models/User');
const router = express.Router();

// POST a new user
router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, country } = req.body;
    const newUser = new User({ first_name, last_name, email, country });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    console.error('Error fetching students:', err);
    res.status(500).send('Something went wrong');
  }
});


module.exports = router;

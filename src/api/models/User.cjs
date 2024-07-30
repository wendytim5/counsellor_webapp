const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  age: { type: String, required: true },
  year_group: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
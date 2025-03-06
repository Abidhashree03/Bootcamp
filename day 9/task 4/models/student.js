const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  major: { type: String, required: true },
  year: { type: String, required: true },
  image: { type: String } // Optional
});

module.exports = mongoose.model('Student', studentSchema);

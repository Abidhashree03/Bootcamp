const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name must be at least 3 characters long'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  rollNo: {
    type: String,
    required: [true, 'Roll Number is required'],
    unique: true,
    match: [/^\d{4,10}$/, 'Roll Number must be between 4 to 10 digits']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
  },
  age: {
    type: Number,
    required: true,
    min: [10, 'Age must be at least 10'],
    max: [100, 'Age cannot exceed 100']
  }
});

module.exports = mongoose.model('Student', StudentSchema);

const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// GET all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new student
router.post('/', async (req, res) => {
  const { name, email, major, year, image } = req.body;
  const newStudent = new Student({ name, email, major, year, image });

  try {
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

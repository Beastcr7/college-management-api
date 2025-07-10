const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const authenticate = require('../middleware/authMiddleware');

// Create a student
router.post('/', authenticate, async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all students
router.get('/', authenticate, async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
});

module.exports = router;

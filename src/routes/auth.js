const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const usersDB = [];

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const newUser = new User(username, password);
  usersDB.push(newUser);
  res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = usersDB.find((u) => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, 'mysecretkey', { expiresIn: '1h' });
  res.status(200).json({ token });
});

module.exports = router;

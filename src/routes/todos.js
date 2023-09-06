const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');
const jwt = require('jsonwebtoken');

const todosDB = [];

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  jwt.verify(token.split(' ')[1], 'mysecretkey', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

router.post('/todos', authenticateToken, (req, res) => {
  const { title } = req.body;
  const newTodo = new Todo(title);
  todosDB.push(newTodo);
  res.status(201).json(newTodo);
});

router.get('/todos', authenticateToken, (req, res) => {
  res.status(200).json(todosDB);
});


module.exports = router;

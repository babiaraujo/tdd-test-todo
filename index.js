
require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const secret = process.env.JWT_SECRET || 'defaultsecret';

const authRoutes = require('./src/routes/auth');
const todosRoutes = require('./src/routes/todos');

app.use('/api/auth', authRoutes);
app.use('/api/todos', todosRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
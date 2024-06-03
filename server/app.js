const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const booksRouter = require('./routes/books');
app.use('/api/books', booksRouter);

module.exports = app;

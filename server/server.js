const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB (replace 'your-database-url' with actual MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Book Schema
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
});

const Book = mongoose.model('Book', BookSchema);

// Routes
app.post('/api/books', async (req, res) => {
  const { title, author } = req.body;
  const newBook = new Book({ title, author });
  try {
    await newBook.save();
    res.status(201).send('Book added successfully');
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

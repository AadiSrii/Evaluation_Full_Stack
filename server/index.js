const express = require('express');
const cors = require('cors');
const booksRouter = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

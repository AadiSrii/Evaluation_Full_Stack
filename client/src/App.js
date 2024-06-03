import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="App">
      <h1>My Bookstore</h1>
      <BookForm onAddBook={handleAddBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;

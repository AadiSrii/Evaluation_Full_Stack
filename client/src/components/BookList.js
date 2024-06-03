import React from 'react';
import Book from './Book';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book, index) => (
          <Book key={index} title={book.title} author={book.author} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;

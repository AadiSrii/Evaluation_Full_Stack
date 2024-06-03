import React from 'react';

const Book = ({ title, author }) => {
  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default Book;

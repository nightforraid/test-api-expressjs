// models/bookModel.js
const db = require('../config/db');  // Import the database pool

const Book = {
  // Get all books
  getAllBooks: async () => {
    try {
      const [results, fields] = await db.query('SELECT * FROM books');
      return results;
    } catch (err) {
      throw err;  // Propagate the error to be handled at a higher level
    }
  },

  // Get a single book by ID
  getBookById: async (bookId) => {
    try {
      const [results, fields] = await db.query('SELECT * FROM books WHERE id = ?', [bookId]);
      return results;
    } catch (err) {
      throw err;
    }
  },

  // Create a new book
  createBook: async (title, author, description) => {
    const query = 'INSERT INTO books (title, author, description) VALUES (?, ?, ?)';
    try {
      const [results, fields] = await db.query(query, [title, author, description || null]);
      return results;
    } catch (err) {
      throw err;
    }
  },

  // Update an existing book
  updateBook: async (bookId, title, author, description) => {
    const query = 'UPDATE books SET title = ?, author = ?, description = ? WHERE id = ?';
    try {
      const [results, fields] = await db.query(query, [title, author, description || null, bookId]);
      return results;
    } catch (err) {
      throw err;
    }
  },

  // Delete a book by ID
  deleteBook: async (bookId) => {
    const query = 'DELETE FROM books WHERE id = ?';
    try {
      const [results, fields] = await db.query(query, [bookId]);
      return results;
    } catch (err) {
      throw err;
    }
  }
};

module.exports = Book;

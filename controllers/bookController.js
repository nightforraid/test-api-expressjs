// controllers/bookController.js
const Book = require('../models/bookModel');

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.getAllBooks();
      res.status(200).json({ books });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Database query failed', error: err.message });
    }
  },

  getBookById: async (req, res) => {
    const bookId = req.params.id;
    if (isNaN(bookId)) {
      return res.status(400).json({ message: 'Invalid book ID' });
    }

    try {
      const results = await Book.getBookById(bookId);
      if (results.length === 0) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json({ book: results[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Database query failed', error: err.message });
    }
  },

  createBook: async (req, res) => {
    const { title, author, description } = req.body;
    if (!title || !author) {
      return res.status(400).json({ message: 'Title and author are required fields' });
    }

    try {
      const result = await Book.createBook(title, author, description);
      res.status(201).json({
        message: 'Book created successfully',
        book: {
          id: result.insertId,
          title,
          author,
          description: description || null
        }
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Database query failed', error: err.message });
    }
  },

  updateBook: async (req, res) => {
    const bookId = req.params.id;
    const { title, author, description } = req.body;
    if (isNaN(bookId)) {
      return res.status(400).json({ message: 'Invalid book ID' });
    }

    if (!title || !author) {
      return res.status(400).json({ message: 'Title and author are required fields' });
    }

    try {
      const result = await Book.updateBook(bookId, title, author, description);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json({
        message: 'Book updated successfully',
        book: { id: bookId, title, author, description: description || null }
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Database query failed', error: err.message });
    }
  },

  deleteBook: async (req, res) => {
    const bookId = req.params.id;
    if (isNaN(bookId)) {
      return res.status(400).json({ message: 'Invalid book ID' });
    }

    try {
      const result = await Book.deleteBook(bookId);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Database query failed', error: err.message });
    }
  }
};

module.exports = bookController;

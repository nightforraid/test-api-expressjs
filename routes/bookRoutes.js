// routes/bookRoutes.js
const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.post('/books', authenticateToken, bookController.createBook);
router.put('/books/:id', authenticateToken, bookController.updateBook);
router.delete('/books/:id', authenticateToken, bookController.deleteBook);

module.exports = router;

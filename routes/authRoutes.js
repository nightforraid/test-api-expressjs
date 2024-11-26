const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController'); 

// Endpoint untuk login
router.post('/login', login);

// Endpoint untuk registrasi
module.exports = router;

// config/db.js
const mysql = require('mysql2/promise');  // Use the promise wrapper
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookdb'
};

const pool = mysql.createPool(dbConfig);  // Use a pool for efficient querying

module.exports = pool;  // Export the pool so it can be used in other files

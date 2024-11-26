// models/userModel.js
const db = require('../config/db');  // Import the promise-based db configuration

const getUserByUsername = async (username) => {
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length === 0) {
            console.error('No user found for username: ' + username);  // Debugging line
            return null;  // Return null if no user found
        }
        return rows[0];  // Return the first user in case of multiple results
    } catch (error) {
        console.error('Database error:', error);  // Detailed logging of errors
        throw new Error('Database query failed');
    }
};

module.exports = { getUserByUsername };

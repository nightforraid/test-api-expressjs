const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');  // Adjust the path if needed

// Login function
const login = async (req, res) => {
  const { username, password } = req.body;
  console.log('Received credentials:', username, password);  // Log received credentials

  try {
    const user = await User.getUserByUsername(username);
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'Username not found' });
    }

    // Check the password validity
    console.log('Entered Password:', password);
    console.log('Stored Password Hash:', user.password);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password');
      return res.status(400).json({ message: 'Incorrect password' });
    }

    // Generate the token
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send response with the token
    res.json({
      status: 'success',
      message: 'Login successful',
      data: { token: token },
    });
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ message: 'Database query failed', error: error.message });
  }
};

module.exports = { login };

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
25
const User = require('../models/User');
const router = express.Router();
// User Registration
router.post('/register', async (req, res) => {
const { name, email, password } = req.body;
try {
const userExists = await User.findOne({ email });
if (userExists) return res.status(400).json({ message: 'User already exists' });
const user = new User({ name, email, password });
await user.save();
res.status(201).json({ message: 'User registered successfully' });
} catch (err) {
res.status(500).json({ message: 'Server Error' });
}
});
// User Login
router.post('/login', async (req, res) => {
const { email, password } = req.body;
try {
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ message: 'Invalid credentials' });
const isMatch = await user.matchPassword(password);
if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
res.json({ token });
} catch (err) {
res.status(500).json({ message: 'Server Error' });
}
});
module.exports = router;
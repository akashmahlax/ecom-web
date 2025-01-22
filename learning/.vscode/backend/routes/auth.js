const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const User = require('../models/user');
const { MongoClient, GridFSBucket } = require('mongodb');

const router = express.Router();

// Configure multer for profile picture upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Signup
router.post('/signup', upload.single('profilePic'), async (req, res) => {
    try {
        const { firstName, lastName, dateOfBirth, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const profilePic = req.file ? req.file.path : '';

        const newUser = new User({
            firstName,
            lastName,
            profilePic,
            dateOfBirth,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Profile
router.get('/profile', async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, 'secretkey');
        const user = await User.findById(decoded.id);

        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

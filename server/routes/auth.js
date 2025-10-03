const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');

const router = express.Router();

// POST /api/auth/register
router.post('/register', registerUser);

// POST /api/auth/login
router.post('/login', loginUser);

// POST /api/auth/logout
router.post('/logout', logoutUser);

module.exports = router;
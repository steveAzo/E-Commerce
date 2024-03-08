const User = require("../models/User")
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const { createSendToken } = require('../middleware/authMiddleware')






async function verifyEmail(token) {
    try {
        console.log('Received token:', token);
        const user = await User.findOne({ verificationToken: token });


        if (!user ) {
            throw new Error('Invalid or expired verification token');
        }

        user.isActive = true;
        user.verificationToken = undefined;
        user.verificationCodeExpires = undefined;
        await user.save();

        // Additional actions...

        return 'Email verified successfully';
    } catch (error) {
        console.error('Error verifying email:', error);
        throw new Error('Email verification failed');
    }
}

function tokenExpired(expirationDate) {
    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 1); // Token expires in 1 hour
    return expirationTime;
}

module.exports = {
    verifyEmail,
    tokenExpired
}
const User = require('../models/User')
const VerificationToken = require('../models/verificationToken')
const crypto = require('crypto');
const verifyService = require("../services/verifyService")
const nodemailer = require('nodemailer');



async function saveVerificationToken(userId) {
    try {
        const verificationToken = crypto.randomBytes(32).toString('hex');
    
        const tokenRecord = new VerificationToken({
            user: userId,
            token: verificationToken,
        });

        await tokenRecord.save();

        return verificationToken;
    } catch(error) {
        console.error('ErrorMessage:', error)
        throw error;
    }
}

const sendVerificationEmail = async (email, tokenPromise) => {
    try {

        const token = await tokenPromise
        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'stephenazongo77@gmail.com',
                pass: 'qhny rtap vlrr brdz',
            },
        });

        // Email content
        const verificationLink = 'http://localhost:5000/api/v1/users/verify/' + token;
        const mailOptions = {
            from: 'stephenazongo77@gmail.com',
            to: email,
            subject: 'Verify Your Email',
            text: `Click on the following link to verify your email: ${verificationLink}`,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent:', info);

        return true; // Email sent successfully
    } catch (error) {
        console.error('Error sending verification email:', error);
        return false; // Email sending failed
    }
};



module.exports = { 
    saveVerificationToken,
    sendVerificationEmail,
 }
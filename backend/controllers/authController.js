const AuthService = require("../services/authServices")
const { createSendToken } = require('../middleware/authMiddleware')
const authMiddleware = require('../middleware/authMiddleware')
const { saveVerificationToken } = require('../utils/verifiedToken')



async function signup(req, res) {
    try {
        const userData = req.body
        const result = await AuthService.signupUser(userData)

        if (result.success) {
            const successResponse = {
                success: true,
                message: 'Signup successful. Please login.',
            }

            const redirectUrl = '/signin'

            res.status(201).json({ ...successResponse, redirectUrl })
        } else {
            res.status(400).json({ error: result.error })
        } 
    } catch(error) {
        console.error('Error handling user signUp:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
}


async function login(req, res) {
    try {
        const { email, password } = req.body
        const result = await AuthService.loginUser(email, password)

        if(result.success) {
            createSendToken(result.user, 200, res)
        } else {
            res.status(401).json({ error: result.error })
        } 
    } catch (error) {
        console.error('Error during login:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
}


const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const resetToken = await AuthService.generateResetToken(email);

        res.status(200).json({ success: true, message: 'Password reset token sent successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message || "Internal Server Error" });
    }
};

const resetPassword = async (req, res) => {
    try {
        const { resetToken, newPassword } = req.body;
        await AuthService.resetPassword(resetToken, newPassword);

        res.status(200).json({ success: true, message: 'Password reset successful' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message || "Internal Server Error" });
    }
};

const logout = (req, res) => {
    authMiddleware.logout(req, res);
}


module.exports = {
    signup,
    login,
    forgotPassword,
    resetPassword,
    logout,
}
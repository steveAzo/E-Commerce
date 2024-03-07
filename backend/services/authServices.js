const User = require("../models/User")
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const VerificationToken = require('../models/verificationToken')
const { v4: uuidv4 } = require('uuid')
const { saveVerificationToken } = require("../utils/verifiedToken")





async function signupUser(userData) {
    try {
        const { password, ...otherDetails } = userData

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            ...otherDetails,
            password: hashedPassword,
        })

        await newUser.save();

        const isTokensaved = await saveVerificationToken(newUser._id)

        if(!isTokensaved) {
            console.error('Error saving verification token.')
        }

        return { success: true, user: newUser }
    } catch(error) {
        console.error("Error in user signup:", error)
        return { success: false, error: error.message || "Unknown Error" }
    }
}




async function loginUser(email, password) {
    try {
        const user = await User.findOne({ email })

        if(!user || !(await bcrypt.compare(password, user.password))) {
            return { success: false, error: "Invalid email or password" }
        }

        return { success: true, user }
    } catch(error) {
        console.error("Error in user login:", error)
        return { success: false, error: error.message || 'Unknown Error' }
    }
}



const generateResetToken = async (email) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('User not found')
    }

    const resetToken = uuidv4()
    user.passwordResetCode = crypto.createHash('sha256').update(resetToken).digest('hex')
    user.passwordResetExpires = Date.now() + 10 * 60 * 1000

    await user.save()

    return resetToken;
}

const resetPassword = async (resetToken, newPassword) => {
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    const user = await User.findOne({
        passwordResetCode: hashedToken,
        passwordResetExpires: { $gt: Date.now() }
    })

    if (!user) {
        throw new Error('Invalid or expired reset token')
    }

    user.password = newPassword
    user.passwordResetCode = undefined
    user.passwordResetExpires = undefined

    await user.save()
}


module.exports = {
    signupUser,
    loginUser,
    generateResetToken,
    resetPassword,
}
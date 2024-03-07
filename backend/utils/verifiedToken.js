const User = require('../models/User')
const { generateVerificationToken } = require('./verificationUtils')
const VerificationToken = require('../models/verificationToken')


async function saveVerificationToken(userId) {
    try {
        const user = await User.findById(userId)

        if(!user) {
            return false;
        }

        const verificationToken = generateVerificationToken()
        const newVerificationToken = new VerificationToken({
            userId,
            token: verificationToken,
        })

        await newVerificationToken.save()
        await user.save()

        return true;
    } catch(error) {
        console.error('Error saving verification token:', error)
        throw error;
    }
}

module.exports = { 
    saveVerificationToken
 }
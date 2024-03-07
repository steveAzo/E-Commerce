const mongoose = require('mongoose')

const verificationTokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 60 * 24
    },
}) 

const VerificationToken = mongoose.model('VerificationToken', verificationTokenSchema)

module.exports = VerificationToken;
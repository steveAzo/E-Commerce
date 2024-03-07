const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { isEmail } = require('validator')

const CartSchema = new Schema({
    items: [{
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, default: 1 }
    }]
})

const UserSchema = new Schema({
    cart: { 
        type: CartSchema, 
        default: { items: [] } 
    } ,
    name: { 
        type: String, 
        required: true, 
        unique: true, 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: { 
        type: String, 
        required: true, 
        minlength: 4, 
    },
    checkoutHistory: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Checkout' 
    }],
    phoneNumber: { 
        type: String, 
        required: [true, 'phone number is required'], 
    },
    isActive: { 
        type: Boolean, 
        default: false 
    },
    profile: {
        url: String, 
        public_id: String
    },
    verificationCode: {
        type: String,
        select: false,
    },
    passwordResetCode: {
        type: String,
        select: false
    },
    verificationToken: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VerificationToken',
    },
    verificationCodeExpires: {
        type: String,
        select: false
    },
    firstTimeLogin: {
        type: Boolean,
        default: true
    },
}, { timestamps: true })

const Users = mongoose.model('User', UserSchema)

module.exports = Users
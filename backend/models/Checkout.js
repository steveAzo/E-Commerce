const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number
    }],
    totalPrice: Number,
    orderDate: {
        type: Date,
        default: Date.now
    },
    paymentMethod: String,
    status: String,
    shippingAddress: String
}, { timestamps: true })

const Checkouts = mongoose.model('Checkout', CheckoutSchema)

module.exports = Checkouts

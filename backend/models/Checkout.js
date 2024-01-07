const mongoose = require("mongoose")

const CheckoutSchema = new mongoose.Schema({
    userId: {
        type: Schema.Type.ObjetId, 
        ref: 'User'
    },
    products: {
        productId: { type: Schema.Type.ObjectId, ref: 'Product' },
        quantity: Number
    },
    totalPrice: Number,
    OrderData: {
        type: Date,
        default: Date.now
    },
    paymentMethod: String,
    status: String,
    shippingAdress: String

})

Checkouts = mongoose.model('Checkout', CheckoutSchema)

module.exports = Checkouts
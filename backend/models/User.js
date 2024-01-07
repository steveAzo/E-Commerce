const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CartSchema = new Schema({
    items: [{
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, default: 1 }
    }]
})

const UserSchema = new Schema({
    cart: { type: CartSchema, default: { items: [] } } ,
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    checkoutHistory: [{ type: Schema.Types.ObjectId, ref: 'Checkout' }]
})

const Users = mongoose.model('User', UserSchema)

module.exports = Users
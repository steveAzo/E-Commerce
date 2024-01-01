const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema ({
    name: {type:String, required: true},
    category: {type:String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type:Number, required: true}
})

const Products = mongoose.model('Product', ProductSchema)

module.exports = Products
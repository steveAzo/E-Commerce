const Product = require('../models/Product')


const createNewProduct = async (productData) => {
    try {
        console.log("Received data:", productData); 
        const newProduct = new Product(productData)
        const savedProduct = await newProduct.save()
        return savedProduct;
       
    } catch(error) {
        console.error("Error in creating Product")
        return { success: false, error: error.message || "Unknown error" };

    }
}
const  getAllProducts = async () => {
    try{
        const products = await Product.find()
        return products;
    } catch (error) {
        console.error("Error fetching products")
        return { success: false, error: error.message || "Unknown error" };
    }
    
}

const getOneWorkout = async (productId) => {
    try {
        const product = await Product.findById(productId)
        return product;
    } catch(error) {
        console.error("Problem getting that particular product")
        return {success: false,  error: error.message || "Unknown Error"};
    }
}

const deleteOneProduct = async (productId) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(productId)
        return deletedProduct;
    } catch(error) {
        console.error("Problem deleting this particular product")
        return { success: false, error: error.message || "Unknown Error" };
    }
}

const updateOneProduct = async (productId, updateFields) => {
    try {
        
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            {$set: updateFields},
            {new: true, runValidators: true  }
        )
        if(!updateFields){
            throw {status: 404, message: `The Update fields are missing`}
        }
        return updatedProduct;
    } catch(error) {
        console.error("Error updating product:", error.message || error)
        throw {status: error?.status || 500, message: error?.message || "Internal Server Error"}
    }
}


module.exports = { 
    createNewProduct,
    getAllProducts,
    getOneWorkout,
    deleteOneProduct,
    updateOneProduct
}

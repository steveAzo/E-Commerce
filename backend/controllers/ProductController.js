const ProductServices = require('../services/ProductServices')

const createNewProduct = async (req, res) => {
    try {
        const productData = req.body
        const createdProduct = await ProductServices.createNewProduct(productData)

        res.status(201).json({ success: true, data: createdProduct})
    } catch(error) {
        console.error("Error Handling createNewProduct request")
        res.status(500).json({success: false, error: "Internal Server Error"})
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductServices.getAllProducts()
        res.status(200).json({success: true, data: products})
    } catch(error) {
        console.error("Error in handling the get request")
        res.status(500).json({success: false, error: "Internal Server Error"})
    }
}

const getOneWorkout = async (req, res) => {
    const { productId } = req.params
    if(!productId) {
        return(
            res
            .status(400)
            .send({
                status: "FAILED",
                data: {error: "Product ID is missing"},
            })
        )
        
    }
    try {
        const product = await ProductServices.getOneWorkout(productId)
        res.status(200).json({success: true, data: product})
    } catch(error) {
        console.error("Error in handling the get request")
        res.status(500).json({success: false, error: "Internal server Error"})
    }
}


const deleteOneProduct = (req, res) => {
    const { productId } = req.params
    if(!productId) {
        return (
            res.status(400).send({status: "FAILED", data: {error: "Product ID is missing"}})
        );
    }
    try {
        const deletedProduct = ProductServices.deleteOneProduct(productId)
        res.status(200).json({success: true, data: deletedProduct})
    } catch(error) {
        console.error("Error handling the delete request")
        res.status(500).json({success: false, error: "Internal Server error"})
    }
}

const updateOneProduct = async (req, res) => {
    const { productId } = req.params
    const updateFields = req.body
    if(!productId) {
        return (
            res.status(400).send({status: "FAILED", data: { error: "Product ID cannot be missing" }})
        )
    }
    try {
        const updatedProduct = await ProductServices.updateOneProduct(productId, updateFields)
        res.status(200).json({ success: true, data: updatedProduct })

    } catch(error) {
        console.error("Error handling the patch request")
        res.status(500).json({success: false, error: "Internal Server Error"})
    }
}

module.exports = {
    createNewProduct,
    getAllProducts,
    getOneWorkout,
    deleteOneProduct,
    updateOneProduct
}


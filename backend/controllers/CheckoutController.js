const CheckoutServices = require('../services/CheckoutServices')

const createNewCheckout = async (req, res) => {
    
    const checkoutData = req.body; 

    try {
        const createdCheckout = await CheckoutServices.createNewCheckout(checkoutData)
        res.status(201).json({ success: true, data: createdCheckout })
    } catch (error) {
        console.error("Error creating checkout:", error.message || error)
        res.status(error.status || 500).json({ success: false, error: error.message || "Internal Server Error" })
    }
}


const deleteCheckout = async (req, res) => {
    const { checkoutId, userId } = req.params

    try {
        const deletedCheckout = await CheckoutServices.deleteCheckout(checkoutId, userId)
        res.status(200).json({ success: true, data: deletedCheckout })
    } catch (error) {
        console.error("Error deleting checkout:", error.message || error)
        res.status(error.status || 500).json({ success: false, error: error.message || "Internal Server Error" })
    }
}


const getOneCheckout = async (req, res) => {
    const { userId, checkoutId } = req.params

    try {
        const checkout = await CheckoutServices.getOneCheckout(userId, checkoutId)
        res.status(200).json({ success: true, data: checkout })
    } catch (error) {
        console.error("Error getting one checkout:", error.message || error)
        res.status(error.status || 500).json({ success: false, error: error.message || "Internal Server Error" })
    }
}


const getAllCheckouts = async (req, res) => {
    const { userId } = req.params
    try {
        const allCheckouts = await CheckoutServices.getAllCheckouts(userId)
        res.status(200).json({ success: true, data: allCheckouts })
    } catch (error) {
        console.error("Error getting all checkouts:", error.message || error)
        res.status(error.status || 500).json({ success: false, error: error.message || "Internal Server Error" })
    }
}

const updateCheckout = async (req, res) => {
    const { checkoutId } = req.params
    const updateDetails = req.body

    try {
        const updatedCheckout = await CheckoutServices.updateCheckout(checkoutId, updateDetails)
        res.status(200).json({ success: true, data: updatedCheckout })
    } catch (error) {
        console.error("Error updating checkout:", error.message || error)
        res.status(error.status || 500).json({ success: false, error: error.message || "Internal Server Error" })
    }
}





module.exports = {
    createNewCheckout,
    deleteCheckout,
    getOneCheckout,
    getAllCheckouts,
    updateCheckout

}



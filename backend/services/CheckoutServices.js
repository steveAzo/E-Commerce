const Checkout = require("../models/Checkout")

const getAllCheckouts = async (userId) => {
    try {
        const checkouts = await Checkout.find({ userId })
        return checkouts
    }
    catch(error) {
        return { success: false, error: error.message || "Unknown error" }
    }
    
}

const getOneCheckout = async (userId, checkoutId) => {
    try {
        const checkout = await Checkout.findOne({ _id: checkoutId, userId: userId });

        if (!checkout) {
            throw { status: 404, message: "Checkout not found for the specified user" };
        }

        return checkout;
    } catch (error) {
        throw { status: error.status || 500, message: error.message || "Internal Server Error" };
    }
};






const createNewCheckout = async (checkoutData) => {
    if(!checkoutData) {
        throw { status: 400, message: "Checkout Info and User ID are missing!" };

    }
    try {
        const checkout = new Checkout({ ...checkoutData })
        const createdCheckout = await checkout.save()
        return createdCheckout;
    } catch(error) {
        return { success: false, error: error.message || "Unknown Error!" }
    }
}



const deleteCheckout = async (checkoutId, userId) => {
    try {
        const deletedCheckout = await Checkout.findOneAndRemove({ _id: checkoutId, userId });
        if (!deletedCheckout) {
            throw { status: 404, message: "Checkout not found for the user" };
        }
        return deletedCheckout;
    } catch (error) {
        console.error("Error deleting checkout:", error.message || error);
        throw { status: error?.status || 500, message: error?.message || "Internal Server Error" };
    }
}


const updateCheckout = async (checkoutId, userId, updateDetails) => {
    try {
        const updatedCheckout = await Checkout.findOneAndUpdate(
            { _id: checkoutId, userId },
            { $set: updateDetails },
            { new: true, runValidators: true }
        );
        if (!updatedCheckout) {
            throw { status: 404, message: "Checkout not found for the user" };
        }
        return updatedCheckout;
    } catch (error) {
        console.error("Error updating checkout:", error.message || error);
        throw { status: error?.status || 500, message: error?.message || "Internal Server Error" };
    }
};





module.exports = {
    getAllCheckouts,
    createNewCheckout,
    getOneCheckout,
    deleteCheckout,
    updateCheckout
}
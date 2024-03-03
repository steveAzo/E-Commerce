const User = require('../models/User')


const createUser = async (userDetails) => {
    try {
        const { password, ...otherDetails } = userDetails;

        const newUser = new User({
            ...otherDetails,
            password: password, // Store the plain password, without hashing
        });

        await newUser.save();

        return { success: true, user: newUser };
    } catch (error) {
        console.error("Error in creating a new User: ", error);
        return { success: false, error: error.message || "Unknown Error" };
    }
};




const updateUser = async (userId, updateDetails) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId, 
            { $set: updateDetails },
            { new: true, runValidators: true }
        )
        if(!updateDetails) {
            throw { status: 404, message: `Update details of the user not found` }
        }
        return updatedUser;
        
    } catch(error) {
        console.error("Error updating User", error.message || error) 
        throw {status: error?.status || 500, message: error?.message || "Internal Server Error"}
    }
}

const getAllUsers = async () => {
    try {
        const users = await User.find()
        return users;
    } catch(error) {
        throw { success: false, status: error.status || 500, message: error?.message || "Internal Server Error" }
    }
}

const getOneUser = async (userId) => {
    try {
        const user = await User.findById(userId)
        return user;
    } catch(error) {
        console.error("Error in getOneUser:", error)
        throw { success: false, status: error.status || 500, message: error?.message || "Internal Server Error" }
    }
}

const deleteOneUser = async (userId) => {
    try {
        const finishedUser = await User.findByIdAndDelete(userId)
        return finishedUser;
    } catch(error) {
        console.error("Error in deleteOneUser:", error)
        throw { success: false, status: error.status || 500, message: error?.message || "Internal Server Error" }
    }
}
   





module.exports = {
    createUser,
    updateUser,
    getAllUsers,
    getOneUser,
    deleteOneUser
}
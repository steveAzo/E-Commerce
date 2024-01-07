const userServices = require("../services/UserServices")



const createUser = async (req, res) => {
    try {
        const userDetails = req.body
        const UserCreated = await userServices.createUser(userDetails)
        res.status(201).json({ success: true, data: UserCreated })
    } catch(error) {
        return { success: false, error: error.message || "Internal Server Error" }
    }
}

const updateUser = async (req, res) => {
    const updateDetails = req.body
    const { userId } = req.params
    if (userId === undefined) {
        return res.status(404).json({ error: "User not found" });
    }
    
    try {
        if(!userId) {
            return (
                res.status(404).json({ error: "User not found" })
            );
        }
        const updatedUser = await userServices.updateUser(userId, updateDetails)
        res.status(200).json({ success: true, data: updatedUser })
    } catch(error) {
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userServices.getAllUsers()
        res.status(200).json({success: true, data: users})
    } catch(error) {
        return res.status(400).json({ success: false, error: "Internal Server Error" });
    }
} 

const getOneUser = async (req, res) => {
    const { userId } = req.params 
    try {
        const user = await userServices.getOneUser(userId)

        console.log(`Attempting to retrieve user with ID: ${userId}`);

        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        console.log(`User found: ${JSON.stringify(user)}`);

        res.status(200).json({ success: true, data: user })
    } catch(error) {
        return res.status(500).json({ success: false, error: "Internal Server Error" })
    }
}

const deleteOneUser = async (req, res) => {
    try {
        const { userId } = req.params
        const finishedUser = await userServices.deleteOneUser(userId)
        if(!finishedUser) {
            res.status(404).json({ success: false, error: error?.message || "Finished User not Found" })
        }
        res.status(200).json({ success: true, data: finishedUser })
    } catch(error) {
        return res.status(500).json({ success: false, error: "Internal Server Error" })
    }
}



module.exports = {
    createUser,
    updateUser,
    getAllUsers,
    getOneUser,
    deleteOneUser
}
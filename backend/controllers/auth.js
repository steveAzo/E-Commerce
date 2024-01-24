const User = require("../models/User")


exports.register = async (req, res, next) => {
    const { name, password } = req.body
    if (password.length < 4) {
        return res.status(400).json({message: "Password less than 4 characters"})
    }
    try {
        await User.create({
            name, password, 
        }).then(user =>
            res.status(200).json({
                message: "User successfully created",
                user,
            })
        )
    } catch(error){
        res.status(401).json({
            message: "User is not successfully created",
            error: error.message,
        })
    }
}

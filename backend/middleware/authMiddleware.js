
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const User = require("../models/User")

const signToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
}

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user.id)
    console.log('JWT_COOKIE_EXPIRES_IN:', process.env.JWT_COOKIE_EXPIRES_IN);

    const cookieOption = {
        expires: new Date(
            Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    }

    res.cookie('jwt', token, cookieOption)
    

    user.password = undefined

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
        },
    })
}

const protect = async (req, res, next) => {
    //1. Get the token from the request
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1]
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt
    }

    if(!token) {
        return res.status(401).json({
            status: 'fail',
            message: 'You are not logged in! Please log in to get acess'
        })
    }

    //2. Verify the token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)

    //3. Check if the user still exists
    const currentUser = await User.findById(decoded.id)
    if(!currentUser) {
        return res.status(401).json({
            status: 'fail',
            message: 'The user belonging to this token no longer exists.'
        })
    }

    //Grant access to protected routes
    req.user = currentUser
    next()
}


const logout = (req, res) => {
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000), // expire cookie in 10 seconds
        httpOnly: true,
    });
    res.status(200).json({ status: 'success' });
}



module.exports = {
    createSendToken,
    protect,
    logout,
}


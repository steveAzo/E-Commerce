const express = require("express")
const router = express.Router()

const UserController = require("../../controllers/UserController")
const AuthController = require("../../controllers/authController")
const { protect } = require("../../middleware/authMiddleware")





//routes for users
router.post('/signup', AuthController.signup)
router.post('/login', AuthController.login)
router.post('/', UserController.createUser)
router.patch('/:userId', UserController.updateUser)
router.get('/', UserController.getAllUsers)
router.get('/getUser/:userId', UserController.getOneUser)
router.delete('/:userId', UserController.deleteOneUser)
router.post('/forgot-password', AuthController.forgotPassword);
router.post('/reset-password', AuthController.resetPassword);
router.get('/logout', AuthController.logout)




router.get('/protected', protect, (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'You have acess to this route'
    })
})


module.exports = router
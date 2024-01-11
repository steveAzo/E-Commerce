const express = require("express")
const router = express.Router()

const UserController = require("../../controllers/UserController")




//routes for users
router.post('/', UserController.createUser)
router.patch('/:userId', UserController.updateUser)
router.get('/', UserController.getAllUsers)
router.get('/:userId', UserController.getOneUser)
router.delete('/:userId', UserController.deleteOneUser)


module.exports = router
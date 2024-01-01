const express = require('express')

const router = express.Router()
const ProductController = require('../../controllers/ProductController')

router.post('/', ProductController.createNewProduct)
router.get('/', ProductController.getAllProducts)
router.get('/:productId', ProductController.getOneWorkout)
router.delete('/:productId', ProductController.deleteOneProduct)
router.patch('/:productId', ProductController.updateOneProduct)

module.exports = router
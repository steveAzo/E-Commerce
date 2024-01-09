const express = require('express')
const router = express.Router()
const CheckoutController = require("../../controllers/CheckoutController")

router.post('/', CheckoutController.createNewCheckout)
router.get('/:userId', CheckoutController.getAllCheckouts)
router.get("/:checkoutId", CheckoutController.getOneCheckout)
router.patch('/:checkoutId', CheckoutController.updateCheckout)
router.delete('/:userId/checkouts/:checkoutId', CheckoutController.deleteCheckout)


module.exports = router
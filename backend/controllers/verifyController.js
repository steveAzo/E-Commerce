const verifyService = require('../services/verifyService')
const { createSendToken } = require('../middleware/authMiddleware')


async function handleEmailVerification(req, res) {
    const { token } = req.params;

    try {
        const result = await verifyService.verifyEmail(token);
        createSendToken(result.user, 200, res);
        console.log('Result:', result);
        res.status(200).send(result);
    } catch (error) {
        console.error('Error handling email verification:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    handleEmailVerification,
}

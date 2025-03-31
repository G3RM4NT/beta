const express = require('express');
const { registerUser , getUserRecommendations } = require('../controllers/usercontroller.js');

const router = express.Router();

router.post('/register', registerUser );
router.get('/:userId/recommendations', getUserRecommendations);

module.exports = router;
const express = require('express');
const { getProducts, addProduct } = require('../controllers/productsController.js');
const router = express.Router();

router.get('/', getProducts);
router.post('/', addProduct);

module.exports = router;
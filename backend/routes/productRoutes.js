const express = require('express');

const router = express.Router();

const productController = require('../controllers/product_controller.js');

router.get('/all', productController.findAllProduct);
router.get('/find', productController.findProduct);
router.get('/rating', productController.addRating);
router.get('/filter', productController.filter);

module.exports = router;

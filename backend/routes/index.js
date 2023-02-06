const express = require('express');

const router = express.Router();

const productController = require('../controllers/product_controller.js');

router.post('/product/create', productController.create);
router.get('/product/all', productController.findAllProduct);
router.get('/product/find', productController.findProduct);
router.get('/product/rating', productController.addRating);
router.get('/product/delete', productController.deleteProduct);
router.get('/product/filter', productController.filter);

module.exports = router;

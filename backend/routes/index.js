const express = require('express');

const router = express.Router();

const adminRoutes = require('./adminRoutes.js');
const productRoutes = require('./productRoutes.js');

router.use('/admin', adminRoutes);
router.use('/product', productRoutes);

module.exports = router;

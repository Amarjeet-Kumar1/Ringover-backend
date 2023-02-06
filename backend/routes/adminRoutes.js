const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin_controller.js');
const auth = require('../utils.js');

router.post('/auth', adminController.createSession);

router.post('/product/create', auth.isAdmin, adminController.create);
router.get('/product/delete', auth.isAdmin, adminController.deleteProduct);

module.exports = router;

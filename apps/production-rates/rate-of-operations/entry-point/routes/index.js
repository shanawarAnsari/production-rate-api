const express = require('express');

const router = express.Router();
const rate_of_operations_controller = require('../controller');
router.get('/getCategories', rate_of_operations_controller.getCategories);



module.exports = router;

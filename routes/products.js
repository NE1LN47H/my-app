var express = require('express');
var router = express.Router();
var Product = require('../models/employeeModel');

/* GET users listing. */
router.get('/products', function(req, res, next) {
  res.send('add-products');
});

router.post('/addProducts', (req, res, next) => {
    
})

module.exports = router;

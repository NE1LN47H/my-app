var express = require('express');
var { body, validationResult } = require('express-validator');
var router = express.Router();
var Employee = require('../models/employeeModel');

router.get('/register', function(req, res) {
  res.render('register-form');
});

router.post('/registerEmployee', [
  body('email').isEmail(),
  body('password').isLength({ min: 8 })
], function(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const employee = new Employee({
    email: req.body.email,
    password: req.body.password
  });

  employee.save()
    .then(function() {
      res.redirect('/');
    })
    .catch(next);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
var client = require('.././db').client;


router.get('/', (req, res) => {
    res.render('homepage');
});

//ADMIN PAGE
router.post('/approve', (req,res) => {
  client.query('INSERT INTO public."Command" (isexecutable) VALUES($1)',
  [true]);
  res.redirect('/');
});

module.exports = router;

// NPMs 
var express = require('express');
// console.log(express);
var router = express.Router();
// console.log(router);
var misc = require('../models/model.js');
// console.log(misc);

//Create route - Always Redirect
router.get('/', function(req, res) {
	res.redirect('/index');
});

// index page renders all misc items to the DOM
router.get('/index', function(req, res) {
  misc.selectAll(function(data) {
    var miscObject = { miscs: data };
    console.log(miscObject);
    res.render('index', miscObject);
  });
});
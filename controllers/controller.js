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

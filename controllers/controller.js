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

// Create a new misc item
router.post('/misc/create', function(req, res) {
	misc.insertMisc(req.body.misc_name, function() {
		res.redirect('/index');
	});
});

// update a new misc item
router.post('/misc/update/:id', function(req, res) {
	misc.updateMisc(req.params.id, function() {
		res.redirect('/index');
	});
});

// exports routes
module.exports = router;
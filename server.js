// NPMs 
var express = require('express');
// console.log(express);
var bodyParser = require('body-parser');
// console.log(bodyParser);
var methodOverride = require('method-override');
// console.log(methodOverride);

var app = express();
// console.log(app);
// applies content from pudlib dir.
app.use(express.static(process.cwd() + '/public'));
app.use(express.static('public'));

// Parse 
app.use(bodyParser.urlencoded({ extended: false}));

// Handlerbars
var exphbs = require('express-handlebars');
// console.log(exphbs);
app.engine('handlerbars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlerbars');
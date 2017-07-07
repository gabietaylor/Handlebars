// NPM requires
var express = require('express');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require("mysql");

var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gabie748.',
    database: 'happinessDB'
});

connection.connect(function (error) {
    if (error) {
        throw error;
    }
    console.log('Connected to MySQL server, as ID = ', connection.threadId);
});

var app = express();

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('app/public'));

require('./controllers/controller.js')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})
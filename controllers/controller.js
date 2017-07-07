var mysql = require("mysql");


module.exports = function (app) {

    // Creating the connection to the mysql database
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Gabie748.',
        database: 'happinessDB'
    });

    app.get("/", function (req, res) {
        connection.query("SELECT * FROM `2017` JOIN `2016` WHERE `2017`.`Country` = `2016`.`Country` LIMIT 10;",
            function (err, data) {
                if (err) {
                    throw err;
                }
                res.render("index", {2017: data, 2016: data});
            });
    });

/*    app.post("/", function (req, res) {
        connection.query("INSERT INTO 2017 (Country, Country) VALUES (?, ?)", [req.body.country, req.body.country],
            function (err, result) {
                if (err) {
                    throw err;
                }
                res.redirect("/")
            });
    });

    app.delete("/:Country", function(req, res) {
        connection.query("DELETE FROM quotes WHERE Country = ?", [req.params.country], function(err, result) {
            if (err) {
                throw err;
            }
            res.redirect("/");
        });
    });*/

}
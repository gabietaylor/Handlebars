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
        connection.query("SELECT * FROM `seventeen` JOIN `sixteen` WHERE `seventeen`.`Country` = `sixteen`.`Country` LIMIT 10;",
            function (err, data) {
                if (err) {
                    throw err;
                }
                res.render("index", {seventeen: data, sixteen: data});
            });
    });

    app.post("/", function (req, res) {
        connection.query("INSERT INTO gayness (Country, happinessRank) VALUES (?, ?)", [req.body.Country, req.body.happinessRank],
            function (err, result) {
                if (err) {
                    throw err;
                }
                res.redirect("/")
            });
    });

    app.delete("/:Country", function(req, res) {
        connection.query("DELETE FROM gayness WHERE Country = ?", [req.params.Country], function(err, result) {
            if (err) {
                throw err;
            }
            res.redirect("/");
        });
    });

}
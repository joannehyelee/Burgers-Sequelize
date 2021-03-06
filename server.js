// ***************************************************
// INITIAL STARTING POINT FOR THE NODE/EXPRESS SERVER
// ***************************************************

// DEPENDENCIES
// ===================================================
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS CONFIGURATION
// ===================================================
var app = express();
var PORT = process.env.PORT || 8000;

// Middleware to handle data parsing
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require models for syncing
var db = require("./models");

// ROUTER
// ===================================================
require("./routes/api-routes.js")(app);

// SYNC SEQUELIZE MODELS & START EXPRESS APP
// ===================================================
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("APP LISTENING ON PORT " + PORT);
    });
});
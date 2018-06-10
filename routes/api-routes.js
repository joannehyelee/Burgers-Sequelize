// A SET OF ROUTES FOR DISPLAYING & SAVING DATA TO THE DB
// =======================================================

// Require our Burger model
var db = require("../models");
// Require Burger controller
var burgers_controller = require("../controllers/burgers-controller");

module.exports = function(app) {

    // GET route for getting all of the burgers
    app.get("/api/burgers/", burgers_controller.read);

};
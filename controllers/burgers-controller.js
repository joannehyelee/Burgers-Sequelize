// Functionality - Logic flow
// =======================================================

module.exports = {
    read: function(req, res){
        db.Burger.findAll({})
            .then(function(dbBurger) {
                res.json(dbBurger);
            });
    }
}
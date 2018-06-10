module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            // AllowNull prevents burger from being entered if it doesn't have a text value
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            // Set devoured default value to false when being entered
            defaultValue: false
        }
    });
    return Burger;
};
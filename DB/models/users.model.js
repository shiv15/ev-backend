const { DataTypes } = require('sequelize');

module.exports = (db) => {
    db.define('customers', {

        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        secret: {
            type: DataTypes.STRING
        },
        isPaid: {
            type: DataTypes.TINYINT
        }
    });
}
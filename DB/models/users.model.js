const { DataTypes } = require('sequelize');

module.exports = (db) => {
    db.define('users', {

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
        premium: {
            type: DataTypes.TINYINT
        },
        roles: {
            type: DataTypes.STRING
        }
    }, { timestamps: true });
}
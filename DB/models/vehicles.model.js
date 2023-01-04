
const { DataTypes } = require('sequelize');

module.exports = (db) => {

    db.define('vehicles', {
        vehicle_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: DataTypes.TEXT,
        },
        Model: {
            type: DataTypes.TEXT
        },
        "Model Year": {
            type: DataTypes.INTEGER,
        },
        Manufacturer: {
            type: DataTypes.TEXT,
        },
        Fuel: {
            type: DataTypes.TEXT
        },
        "All-Electric Range": {
            type: DataTypes.INTEGER
        },
        "Alternative Fuel Economy City": {
            type: DataTypes.DOUBLE,
        },
        "Alternative Fuel Economy Combined": {
            type: DataTypes.DOUBLE
        },
        "Conventional Fuel Economy City": {
            type: DataTypes.TEXT,
        },
        "Conventional Fuel Economy Highway": {
            type: DataTypes.TEXT,
        },
        "Conventional Fuel Economy Combined": {
            type: DataTypes.TEXT
        },
        "Transmission Type": {
            type: DataTypes.TEXT
        },
        "Transmission Make": {
            type: DataTypes.TEXT
        },
        "Engine Type": {
            type: DataTypes.TEXT
        },
        "Engine Size": {
            type: DataTypes.TEXT
        },
        "Engine Cylinder Count": {
            type: DataTypes.TEXT
        },
        "Number of Passengers": {
            type: DataTypes.TEXT
        },
        "Heavy-Duty Power System": {
            type: DataTypes.TEXT
        },
        "Notes": {
            type: DataTypes.TEXT
        }
    });
}
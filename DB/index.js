const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.INSTANCE_SCHEMA, process.env.INSTANCE_USERNAME, process.env.INSTANCE_PASSWORD, {
  host: process.env.INSTANCE_URL,
  dialect: 'mysql'
});

const modelDefiners = [
	require('./models/users.model'),
	require('./models/vehicles.model'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(db);
}

module.exports = db;


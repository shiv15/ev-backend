const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
module.exports = new Sequelize(process.env.INSTANCE_SCHEMA, process.env.INSTANCE_USERNAME, process.env.INSTANCE_PASSWORD, {
  host: process.env.INSTANCE_URL,
  dialect: 'mysql'
});

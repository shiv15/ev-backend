
// const DBCall = require('./requestDB');



const { models } = require('../DB');


module.exports = (authCode) => {
    return Promise.resolve(models.vehicles.findAll());
}



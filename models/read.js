
// const DBCall = require('./requestDB');



const dbmodels = require('../DB/models');


module.exports = (authCode) => {
    return Promise.resolve(dbmodels.Vehicles.findAll());
}



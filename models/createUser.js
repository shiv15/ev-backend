const dbmodels = require('../DB/models');
const crypto = require('crypto');


const createHash = ((email) => crypto.createHash('md5').update(email).digest('hex'))

module.exports = (userData) => {
    userData.secret = createHash(userData.email);
    return Promise.resolve(dbmodels.Customers.create(userData));
}




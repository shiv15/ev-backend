const {models} = require('../DB');
const crypto = require('crypto');


const createHash = ((email) => crypto.createHash('md5').update(email).digest('hex'))

module.exports = (userData) => {
    userData.secret = createHash(userData.email);
    console.log(models);
    return Promise.resolve(models.customers.create(userData));
}




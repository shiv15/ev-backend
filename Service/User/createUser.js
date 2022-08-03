const {models} = require('../../DB');
const crypto = require('crypto');


const createHash = ((email) => crypto.createHash('md5').update(email).digest('hex'))

module.exports = (userData) => {
    userData.secret = createHash(userData.email);
    return models.customers.create(userData)
        .then(data => Promise.resolve(data))
        .catch(error => Promise.reject(error));
}




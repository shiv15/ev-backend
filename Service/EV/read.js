const { models } = require('../../DB');


module.exports = (authCode) => {
    return models.vehicles.findAll()
            .then(data => Promise.resolve(data))
            .catch(error => Promise.reject(error));
}



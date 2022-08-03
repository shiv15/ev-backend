const { models } = require('../../DB');


module.exports = (vehicleData) => {
  return models.vehicles.create(vehicleData)
          .then(data => Promise.resolve(data))
          .catch(error => Promise.reject(error));
};

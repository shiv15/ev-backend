const { models } = require('../../DB');


module.exports = (vehicleId) => {
  const options = {
    where: {
      vehicle_id : vehicleId
    }
  }
  return models.vehicles.destroy(options)
          .then(data => Promise.resolve(data))
          .catch(error => Promise.reject(error));
};
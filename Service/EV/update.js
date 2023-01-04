const { models } = require('../../DB');


module.exports = (vehicleData) => {
  const options = {
    where: {
      vehicle_id : vehicleData.vehicle_id
    }
  }
  return models.vehicles.update(vehicleData, options)
          .then(data => Promise.resolve(data))
          .catch(error => Promise.reject(error));
};

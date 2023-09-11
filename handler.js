const getEV = require('./Service/EV/read');
const createCustomer = require("./Service/User/createUser");
const createVehicle = require("./Service/EV/create");
const updateVehicle = require("./Service/EV/update");
const deleteVehicle = require("./Service/EV/delete");
const getUser = require("./Service/User/getUser");

'use strict';

const setResponse = (statusCode, message) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify({
      message: message,
    }),
  };
}

module.exports.getData = async (event, context, callback) => {
  let response;

  const hash = event.headers["Authorization"].split(" ")[1];
  let user = await getUser(hash);
  user = JSON.stringify(user);
  user = JSON.parse(user)[0];

  // TODO: move to a seperate function, actually create a seperate file called helper.js


  if (!event.headers["Authorization"]) {
    response = setResponse("400", "Api call not authenticated/authorized");
  } else if (!user) {
    response = setResponse("400", "Auth code is not valid");
  } else {
    const getData = await getEV();
    response = setResponse(200, getData);
  }

  callback(null, response);
};


module.exports.createCustomer = async (event, context, callback) => {
  const customer = await createCustomer(JSON.parse(event.body));
  callback(null, {
    secret: customer.secret,
  });
};

module.exports.createVehicle = async (event, context) => {
  // TODO: add a constraint so that duplicate vehicles are not added.
    const vehicle = await createVehicle(JSON.parse(event.body));
    return JSON.stringify({
      statusCode: 200,
      body: {
        OK: true,
        vehilcle_id: vehicle.vehicle_id
      }
    })
}

module.exports.updateVehicle = async (event, context) => {
  // check if the vehicleId is provided. TODO: later add a call to check if the 
  // vehicle to update exists.
  const vehicleDataBody = JSON.parse(event.body);
  if (!vehicleDataBody || !vehicleDataBody.vehicle_id) {
    return JSON.stringify({
      statusCode: 400,
      body: {
        OK: false,
        message: "vehicle_id not provided."
      }
    });
  }
  const vehicle = await updateVehicle(vehicleDataBody);
  return JSON.stringify({
    statusCode: 200,
    body: {
      OK: true,
      vehilcle_id: vehicle.vehicle_id
    }
  });
}

module.exports.deleteVehicle = async (event, context) => {
  const vehicleDataBody = JSON.parse(event.body);
  if (!vehicleDataBody || !vehicleDataBody.vehicle_id) {
    return JSON.stringify({
      statusCode: 400,
      body: {
        OK: false,
        message: "vehicle_id not provided."
      }
    });
  }
  const vehicle = await deleteVehicle(vehicleDataBody.vehicle_id);
  return JSON.stringify({
    statusCode: 200,
    body: {
      OK: true,
      vehilcle_id: vehicle.vehicle_id
    }
  })
}
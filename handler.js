const DBCall = require('./models/read');
const { get } = require('request');
const createCustomer = require("./models/createUser")
const getUser = require("./models/getUser");

// 'use strict';

const setResponse = (statusCode, message) => {
  const response = {
    statusCode: statusCode,
    body: JSON.stringify({
      message: message,
    }),
  };
  return response;
}
module.exports.getData = async (event, context, callback) => {
  let response;
  const hash = event.headers["Authorization"].split(" ")[1];
  let user = await getUser(hash);
  user = JSON.stringify(user);
  user = JSON.parse(user)[0];
  console.log(user);
  // let response;
  
// TODO: move to a seperate function, actually create a seperate file called helper.js



  if (!event.headers["Authorization"]) {
    response = setResponse("400", "Api call not authenticated/authorized");
  } else if(!user){
    response = setResponse("400", "Auth code is not valid");
  }  else {    
    console.log(hash); // 9b74c9897bac770ffc029102a200c5de
    const getData = await DBCall();
    response = setResponse(200, getData);
  }

  callback(null, response);
};


module.exports.createCustomer = async (event, context, callback) => {
  console.log(typeof event.body);
  const customer = await createCustomer(JSON.parse(event.body))
  callback(null, {
    secret: customer.secret,
  });
};
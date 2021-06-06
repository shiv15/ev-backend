const readDB = require('./models/read');

'use strict';


module.exports.getData = async (event, context, callback) => {
  const dbData = await readDB.read()
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: dbData,
    }),
  };

  callback(null, response);
};
var request = require('request');

module.exports = (options) => {
    return new Promise((resolve, reject)=>{
      request(options, function (error, response) { 
        if (error) throw new Error(error);
        resolve(response.body);
      });
    })   
};




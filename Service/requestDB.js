var request = require('request');

module.exports = (options) => {
    return new Promise((resolve, reject)=>{
      request(options, function (error, response) { 
        if (error) throw new Error(error);
        console.log(response.body);
        resolve(response.body);
      });
    })   
};




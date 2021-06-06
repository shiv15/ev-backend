var request = require('request');
var options = {
  'method': 'POST',
  'url': `${process.env.INSTANCE_URL}`,
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${process.env.SECRET}`
  },
  body: JSON.stringify({
	"operation":"sql",
	"sql": "select * from dev.ev_home where Category = 'SUV'"
})

};

const read = () => {
  return new Promise((resolve, reject)=>{
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      console.log(response.body);
      resolve(response.body);
    });
  })
  
}

module.exports = { read }
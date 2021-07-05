var request = require('request');
const requestDB = require('./requestDB');
var options = {
  'method': 'POST',
  'url': `${process.env.INSTANCE_URL}`,
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${process.env.SECRET}`
  },
  body: JSON.stringify({
	"operation":"sql",
	"sql": "select * from dev.ev_home"
})

};

module.exports =  requestDB(options);
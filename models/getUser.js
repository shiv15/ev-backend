const dbmodels = require('../DB/models');


module.exports = (authCode) => {
    return Promise.resolve(dbmodels.Customers.findAll({
        where: {
          secret: authCode
        }
      }));
}




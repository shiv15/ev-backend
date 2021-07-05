const { models } = require('../DB');


module.exports = (authCode) => {
    return Promise.resolve(models.customers.findAll({
        where: {
          secret: authCode
        }
      }));
}




const { models } = require('../../DB');


module.exports = (authCode) => {
    return models.users.findAll({
        where: {
          secret: authCode
        }
      })
      .then((data => Promise.resolve(data)),
            (e => Promise.reject(e)));
}




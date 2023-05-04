module.exports = {
    async up(queryInterface, Sequelize) {
      const transaction = await queryInterface.sequelize.transaction();
      try {
        await queryInterface.renameTable(
          'Customers',
          'Users'
        );
        await transaction.commit();
      } catch (err) {
        await transaction.rollback();
        throw err;
      }
    }
  };
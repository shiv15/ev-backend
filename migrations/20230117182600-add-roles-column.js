module.exports = {
    async up(queryInterface, Sequelize) {
      const transaction = await queryInterface.sequelize.transaction();
      try {
        await queryInterface.addColumn(
          'Customers',
          'roles',
          {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            defaultValue: "user"
          },
          { transaction }
        );
        await transaction.commit();
      } catch (err) {
        await transaction.rollback();
        throw err;
      }
    }
  };
'use strict';

module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'Interests', {
        id: {
          type: DataTypes.STRING,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING
        },
        catcode: {
          type: DataTypes.STRING
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('Interests');
  }
};

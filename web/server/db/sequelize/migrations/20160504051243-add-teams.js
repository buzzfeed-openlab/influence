'use strict';

module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'Teams', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        dateCreated: {
            type: DataTypes.DATE,
        }
    }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('Teams');
  }
};

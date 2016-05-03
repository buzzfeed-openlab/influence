export default (sequelize, DataTypes) =>
  sequelize.define('Interest', {
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
  }, {
    timestamps: false
  });

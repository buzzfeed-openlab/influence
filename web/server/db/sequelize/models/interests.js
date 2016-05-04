export default (sequelize, DataTypes) =>
  sequelize.define('Interest', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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

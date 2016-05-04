export default (sequelize, DataTypes) => {
  const Interest = sequelize.define('Interest', {
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
    timestamps: false,

    classMethods: {
      associate(models) {
        Interest.belongsToMany(models.Team, { through: 'TeamInterest' });
      }
    }
  });

  return Interest;
}
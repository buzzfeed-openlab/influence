export default (sequelize, DataTypes) => {
    const Team = sequelize.define('Team', {
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
            defaultValue: sequelize.fn('NOW')
        }
    }, {
        timestamps: false,

        classMethods: {
            associate(models) {
                Team.belongsToMany(models.Interest, { through: 'TeamInterest' });
            }
        }
    });

    return Team;
}

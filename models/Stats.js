const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Stats extends Model {}

Stats.init(
    {
        exercise: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
)


module.exports = Stats;
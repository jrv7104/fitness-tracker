const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Workout extends Model {}

Workout.init(
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


module.exports = Workout;
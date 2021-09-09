const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Exercise extends Model {}

Exercise.init(
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


module.exports = Exercise;
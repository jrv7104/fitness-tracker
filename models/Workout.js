const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Workout extends Model {}

Workout.init(
    {
        
    }
)


module.exports = Workout;
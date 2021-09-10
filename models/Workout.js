const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
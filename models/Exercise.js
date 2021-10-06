const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: String,
    type: String,
    reps: Number,
    sets: Number,
    weight: Number,
    duration: Number,
    distance: Number
});

// const Exercise = mongoose.model("Exercise", ExerciseSchema);


module.exports = ExerciseSchema;
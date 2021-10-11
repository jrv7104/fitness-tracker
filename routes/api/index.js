const router = require('express').Router();
const workout = require("./workout.js");

router.use("/workouts", workout);

module.exports = router;
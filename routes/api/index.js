const router = require('express').Router();
// const workout = require("./workout.js");
const exercise = require("./exercise");

// router.use("/workout", workout);
router.use("/exercise", exercise);

module.exports = router;
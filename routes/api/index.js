const router = require('express').Router();
const workout = require("./workout.js");

router.use("/workout", workout);

module.exports = router;
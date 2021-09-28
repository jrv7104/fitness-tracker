const router = require("express").Router();
const { Exercise, Workout } = require("../../models");

router.get("/:workouts", async (req, res) => {
    try {
        let workoutData = await Workout.findAll();
        workoutData = workoutData.map((workout) => workout.get({ plain: true});
        res.render("workout", { workoutData});
    } catch (err) {
        res.status(500).json(err);
    }
});


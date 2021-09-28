const router = require("express").Router();
const { Exercise, Workout } = require("../../models");

router.get('/', (req, res) => {
    Exercise.findAll({
        include: Workout,
        through: Workout
    }).then(exercise => res.json(exercise))
});

router.get('/:id', (req, res) => {
    Exercise.findOne({
        where: {
            id: req.params.id
        },
        include: Workout,
        through: Workout
    }).then(exercise => res.json(exercise))
});

router.post('/', (req, res) => {
    Exercise.create(req.body).then(newExercise => res.json(newExercise))
});

router.put('/:id', (req, res) => {
    Exercise.update(req.body, {
        where: {
            id: req.params.id
        },
        include: Workout,
        through: Workout
    }).then(updateExercise => res.json(updateExercise))
});

router.delete('/:id', (req, res) => {
    Exercise.destroy({
        where: {
            id: req.params.id
        },
    }).then(exercise => res.json(exercise))
});

module.exports = router;
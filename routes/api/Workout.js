const router = require("express").Router();
const { Exercise, Workout } = require("../../models");

router.get("/", async (req, res) => {
    Workout.findAll({
        include: Exercise,
        through: Exercise
    }).then(workout => res.json(workout))
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // // be sure to include its associated Products
    
    Workout.findOne({
      where: {
        id: req.params.id
      },
      include: Exercise,
      through: Exercise
    }).then(tag => res.json(tag))
  });

    router.post('/', (req, res) => {

        Workout.create(req.body).then(newWorkout => res.json(newWorkout))
  });

  router.put('/:id', (req, res) => {
      Workout.update(req.body, {
          where: {
              id: req.params.id
          },
          include: Exercise,
          through: Exercise
      }).then(updateWorkout => res.json(updateWorkout))
  });

  router.delete('/:id', (req, res) => {
      Workout.destroy({
          where: {
              id: req.params.id
          },
      }).then(workout => res.json(workout))
  });

  module.exports = router;
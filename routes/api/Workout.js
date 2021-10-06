const router = require("express").Router();
const Workout = require("../../models/Workout");

router.get("/", (req, res) => {
   Workout.aggregate(
       [
           {
               $addFields: {
                   totalDuration: {
                       $sum: "$exercises.duration"
                   }
               }
           }
       ]
   ).then(data => res.json(data))
   .catch(err => res.status(500).json(err))
});

    router.post('/', (req, res) => {

        Workout.create(req.body).then(newWorkout => res.json(newWorkout))
  });

  router.put('/:id', (req, res) => {
      Workout.findByIdAndUpdate( 
        req.params.id,
          {$push:{exercises: req.body}},
          {new: true}
      ).then(updateWorkout => res.json(updateWorkout))
      .catch(err => res.status(500).json(err))
  });

// router.get('/range', (req,res) =>


  module.exports = router;
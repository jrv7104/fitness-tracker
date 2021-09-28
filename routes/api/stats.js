const router = require("express").Router();
const { Exercise, Workout } = require("../../models");

router.get('/', (req, res) => {
    Stats.findAll({
        include: [Workout, Exercise]
    }).then(stats => res.json(stats))
});

router.get('/:id', (req, res) => {
    Stats.findOne({
        where: {
            id: req.params.id
        },
        include: [Workout, Exercise]
    }).then(stats => res.params.json(stats))
});

router.post('/', (req, res) => {
    Stats.create(req.body).then(newStats => res.json(newStats))
});

router.put('/:id', (req, res) => {
    Stats.update(req.body, {
        where: {
            id: req.params.id
        },
    }).then(updateStats => res.json(updateStats))
});

router.delete('/:id', (req, res) => {
    Stats.destroy({
        where: {
            id: req.params.id
        },
    }).then(product => res.json(stats))
});

module.exports = router;
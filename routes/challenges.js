const Router  = require('express');
const router = Router();
const challenge = require('../models/challenge');

//* Get all challenges registred
//TODO Desde aca tenes que crear los filtros FRANCO
router.get('/', async(req, res)=>{
const challenges = await challenge.find();
res.json(challenges)
});

//* Post new Challenge 
router.post('/new', async (req, res) => {
    const newChallenge = new challenge(req.body)
    const savedChallenge = await newChallenge.save();
    res.json(savedChallenge);
});

//* Delete challenge
router.get('/delete/:id', async (req, res) =>{
    const eraseChallenge = await challenge.findByIdAndDelete({_id: req.params.id});
    res.json(eraseChallenge);
});

//* Update Challenge by id
router.patch('/update/:id', async (req, res) => {
 const updatedChallenge = await challenge.updateOne({_id: req.params.id}, {$set: req.body});
 res.send(updatedChallenge);
});

module.exports = router;
import express from 'express';
const router = express.Router();
import Creatures from '../models/creatures.js';
import getRandomCreature  from '../server.js';

const app = express();

//Create routes
//Getting all
router.get('/', async (req, res) => {
        try{
        const creatures = await Creatures.find()
        res.json(creatures)
    } catch (err) { 
        res.status(500).json({message: err.message } )
    }
})

//Getting one
router.get('/:id', async (req,res) => {
    try {
            const creature = await Creatures.findById(req.params.id)
            res.json(creature);
        } catch (err) {
            res.json({ message: "Creature not found" });
        }   
});

//create one
router.post('/', async (req,res) => {
    const creature = new Creatures({
        name: req.body.name,
        creatureType: req.body.creatureType,
        creatureSkill: req.body.creatureSkill,
        weakness: req.body.weakness
    })
    try {
        const newCreature = await creature.save()
        res.status(201).json(newCreature)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})

//update one
router.patch('/:id', async (req, res) => {
    try {
        const creatureId = req.params.id;
        const updatedCreature  = await Creatures.findOneAndUpdate({_id: creatureId}, req.body, {new: true});
        // const updatedCreature = await Creatures.updateOne({_id: req.params.id}, {$set: { name: req.body.name }});
        res.json(updatedCreature)
    } catch (err) {
        res.status(400).json({message: "Id not found"})
    }
})


// deleting one
router.delete('/:id', async (req, res) => {
    try {
        const removedPost = await Creatures.deleteOne({_id: req.params.id})
        res.json({message: "Deleted creature"});
    } catch (err) {
        res.status(500).json({message: err.message })
    }
})


//generate random creature from arrary
router.post('/randomCreature', getRandomCreature, (req, res) => {
  
})


export default router

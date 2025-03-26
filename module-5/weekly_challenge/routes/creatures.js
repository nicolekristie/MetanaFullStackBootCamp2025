import express from 'express';
const router = express.Router();
// import { CreaturesModel }  from '../models/creatures'

import Creatures from '../models/creatures.js'

// router.get()
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
router.get('/:id', (req,res) => {
    // res.json(res.creature);
    res.send(res.creature.name);
    res.send(req.params.id)

})

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
if (req.body.name != null) {
    res.creature.name = req.body.name
}
if (req.body.creatureType != null) {
    res.creature.creatureType = req.body.creatureType
}
    try {
        const updatedCreature = await res.creature.save()
        res.json(updatedCreature)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})


// deleting one
router.delete('/:id', async (req, res) => {
    try {
        await res.creature.remove();
        res.json({message: "Deleted creature"});
    } catch (err) {
        res.status(500).json({message: err.message })
    }
})

//create middleware 
// async function getCreature(req, res, next) {
//     let creature
//     try{
//         creature = await Creatures.findById(req.params.id)
//         if (creature == null) {
//             return res.status(404).json({message: 'cannot find creature'})
//         }
//     } catch (err) {
//         return res.status(500).json({message: err.message})
//     }

//     res.creature = creature
//     next()   //allows you to move on to the next set of middleware
// }


export default router;

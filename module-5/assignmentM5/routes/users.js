import express from 'express';
import Users from '../models/users.js'
const router = express.Router();
const app = express();


//Create routes
//Getting all
router.get('/', async (req, res) => {
        try{
        const users = await Users.find()
        res.json(users)
    } catch (err) { 
        res.status(500).json({message: err.message } )
    }
})

//Getting one
router.get('/:id', async (req,res) => {
    try {
            const user = await Users.findById(req.params.id)
            res.json(user);
        } catch (err) {
            res.json({ message: "User not found" });
        }   
});


//create one
router.post('/', async (req,res) => {
    const user= new Users({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})

//update one
router.patch('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser  = await Users.findOneAndUpdate({_id: userId}, req.body, {new: true});
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({message: "Id not found"})
    }
})

// deleting one
router.delete('/:id', async (req, res) => {
    try {
        const removedUser = await Users.deleteOne({_id: req.params.id})
        res.json({message: "Deleted User"});
    } catch (err) {
        res.status(500).json({message: err.message })
    }
})


export default router

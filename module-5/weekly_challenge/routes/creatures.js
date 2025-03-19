import express from 'express';
// import router from express.Router();

// import Router from 'express'
const router = express.Router();


//Create routes
//Getting all
router.get('/', (req, res) => {
    res.send("Hello World");

})

//Getting one
router.get('/:id', (req,res) => {

})

//create one
router.post('/',(req,res) => {

})

//update one
router.patch('/:id', (req, res) => {

})

// deleting one
router.delete('/:id', (req, res) => {

})

export {router}

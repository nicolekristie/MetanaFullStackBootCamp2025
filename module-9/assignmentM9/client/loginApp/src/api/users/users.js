import express from 'express';
const router = express.Router();  //this is a router object to serve for everything we need
import { getAllUsers, createNewUser, updateUser, deleteUser, getUser } from '../../controllers/usersController.js';


const app = express();
app.use(router);
app.use(express.json());

router.route('/')
.get(getAllUsers)
.post(createNewUser)

router.route('/:id')
.get(getUser)
    
router.route('/:id')
.delete(deleteUser)

router.route('/:id')
.patch(updateUser)



export { router }
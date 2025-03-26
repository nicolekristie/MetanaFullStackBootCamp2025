// Challenge 2: Build-A-Beast Adventure
// Description:

// Develop a REST API that allows users to create and manage their own fantasy creatures! Users can add, view, update, and delete creatures, defining attributes like “name,” “type” (e.g., dragon, unicorn, alien), “special abilities,” and “weaknesses.” Include an endpoint that generates a random creature with randomized attributes.

// Extensions: Use middleware to assign unique “power levels” to each creature, or implement a “battle” feature to compare power levels between creatures.
// Skills Covered: REST API creation, CRUD operations, middleware for dynamic data generation.


import 'dotenv/config';

import express from 'express';
const app = express();
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//creat middleware to run body-parser every time we hit any request
app.use(bodyParser.json());

//mongoose.connect('mongodb://localhost/creatures', { useNewUrlParser: true});

const dbURI='mongodb+srv://nicoleV:t3st1234@cluster0.ynize.mongodb.net/'

mongoose.connect(dbURI, {useNewURLParser: true, dbName: 'beast_collection'})
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open',() => console.log('Connected to Database'))

//setup server to accept json as a body
app.use(express.json());

//setup our routers

import fantasyCreaturesRouter from './routes/creatures.js';
app.use('/creatures', fantasyCreaturesRouter);


// const router = express.Router();  //// get an instance of the express Router

// import { router as fantasyCreaturesRouter} from '../routes/creatures'





// const fantasyCreaturesRouter = require('./routes/subscribers')


app.listen(3000, () => console.log('Server Started'));












// import creatures from './models/creatures';

//import { router as fantasyCreaturesRouter} from '../routes/creatures'
// import "./models/creatures";


console.log(process.env.DATABASE_URL);
// connect to mongodb


app.set('view engine', 'ejs');



// import {fantasyCreaturesRouter} from '../routes/creatures';
// import {router} from './routes/creatures';


// import './routes/creatures.js';


// app.get('/', (req, res) => {
//     res.send("Hello World");
// });



// app.use('/creatures', fantasyCreaturesRouter)




//configure mongoose to connect to db
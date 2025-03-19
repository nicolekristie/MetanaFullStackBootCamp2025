// Challenge 2: Build-A-Beast Adventure
// Description:

// Develop a REST API that allows users to create and manage their own fantasy creatures! Users can add, view, update, and delete creatures, defining attributes like “name,” “type” (e.g., dragon, unicorn, alien), “special abilities,” and “weaknesses.” Include an endpoint that generates a random creature with randomized attributes.

// Extensions: Use middleware to assign unique “power levels” to each creature, or implement a “battle” feature to compare power levels between creatures.
// Skills Covered: REST API creation, CRUD operations, middleware for dynamic data generation.



import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
const app = express();
// const mongoose = require('mongoose');

console.log(process.env.DATABASE_URL);
// connect to mongodb
const dbURI='mongodb+srv://nicoleV:t3st1234@cluster0.ynize.mongodb.net/'
mongoose.connect(dbURI)    
    .then((result) => app.listen(3000))     //listen for request only after db connection is complete
    .catch((err) => console.log(err));

//setup server to accept json as a body
app.use(express.json());

// const fantasyCreaturesRouter = require('../routes/creatures');

// import './routes/creatures.js';

import { router as fantasyCreaturesRouter} from './routes/creatures.js'

app.use('/creatures', fantasyCreaturesRouter);


app.listen(3000, () => console.log('Server Started'));

//configure mongoose to connect to db
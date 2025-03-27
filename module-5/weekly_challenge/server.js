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
import fantasyCreaturesRouter from './routes/creatures.js';

//create middleware to run body-parser every time we hit any request
app.use(bodyParser.json());

const dbURI='mongodb+srv://nicoleV:t3st1234@cluster0.ynize.mongodb.net/'
mongoose.connect(dbURI, {useNewURLParser: true, dbName: 'creatures'})
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open',() => console.log('Connected to Database'))

//setup server to accept json as a body
app.use(express.json());

//setup our routers
app.use('/creatures', fantasyCreaturesRouter);

const creatureArray = [
    { 
    name: "Goby",
    creatureType: "Goblin",
    creatureSkill: "Gobble",
    weakness: "fire-based-attacks"
    },
    { 
      name: "Wolfy",
      creatureType: "Werewolf",
      creatureSkill: "speed",
      weakness: "silver"
    },
    { 
      name: "Cetus",
      creatureType: "Sea Monster",
      creatureSkill: "swimming",
      weakness: "weapons"
    }

  ]

  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }


export default function getRandomCreature(req, res, next){
    const randomElement = getRandomItem(creatureArray);

    req.body.name = randomElement.name;
    req.body.creatureType = randomElement.creatureType;
    req.body.creatureSkill = randomElement.creatureSkill
    req.body.weakness = randomElement.weakness
    res.send(`${req.body.name}\n${req.body.creatureType}\n${req.body.creatureSkill}\n${req.body.weakness}`);
}


app.use(getRandomCreature);

app.listen(3000, () => console.log('Server Started'));
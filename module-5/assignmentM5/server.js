//Assignment M5

// Learn to build a functional backend API using Node.js and MongoDB. Implement data models, perform 
// CRUD operations, and connect the backend to the frontend in later modules.


import 'dotenv/config';
import express from 'express';
const app = express();
import mongoose from 'mongoose';



// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true});

const dbURI='mongodb+srv://nicoleV:t3st1234@cluster0.ynize.mongodb.net/'

mongoose.connect(dbURI, {useNewURLParser: true, dbName: 'Blogs'})
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open',() => console.log('Connected to Database'))

//setup server to accept json as a body
app.use(express.json());

app.set('view engine', 'ejs');


//setup our routers
import blogRouter from './routes/blogs.js';
app.use('/blogs', blogRouter);

app.listen(3000, () => console.log('Server Started'));
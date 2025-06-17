//Assignment M5

// Learn to build a functional backend API using Node.js and MongoDB. Implement data models, perform 
// CRUD operations, and connect the backend to the frontend in later modules.
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import mongoose from 'mongoose';
import blogRouter from './routes/blogs.js';
import userRouter from './routes/users.js';

// import bcrypt from 'bcrypt';

// const hash = bcrypt.hash(password, 10);

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, dbName: 'Blogs'});


const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open',() => console.log('Connected to Database'))

//setup server to accept json as a body
app.use(express.json());
app.set('view engine', 'ejs');

//setup our routers
app.use('/blogs', blogRouter);
app.use('/users', userRouter);
app.listen(3000, () => console.log('Server Started'));
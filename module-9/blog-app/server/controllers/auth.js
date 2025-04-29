import {client} from '../../src/main.js'
import express from 'express';
const router = express.Router(); 
const app = express();
import argon2 from 'argon2';

app.use(express.json());


app.post("/register", (req, res) => {
    res.json("register");
    //send user name and password and send to database
    const { username, password } = req.body
    const hashedpassword = argon2.hash(password);
    

})

app.post("/login", (req, res) => {
    res.json("login");
})

//add middleware to see if user is logged in>return if user is logged in
app.get("/profile", (req, res) => {
    res.json("profile");
})


//create a table in the database that has a username and password
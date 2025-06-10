import express from "express";
const router = express.Router();
// import pool from "/Users/nicole/MetanaFullstackBootCamp/MetanaFullStackBootCamp2025/Authentication/assignment9/loginApp/server/db.js";
import pool from "../db.js";
import argon2 from "argon2";
import validator from "validator";
import jsonwebtoken from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

import jwtGenerator from "../utils/jwtGenerator.js";
import validateInfo from "../middleware/validateInfo.js";
import authorization from "../middleware/authorization.js";



//build routes

//register route > apply middleware function 

router.post("/register", validateInfo, async (req, res) => {
  try {
    //1. destructure the req.body (nam, email, password, role)

    const { user_name, user_email, user_password, user_role } = req.body;

    //2. check if user exist (if user exist then throw error)

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      user_email,
    ]);

    if(user.rows.length !==0) {
        return res.status(401).json("User already exist")   //unauthorized   
    }
    // res.json(user.rows);

    //3. Encrypt the user password

    const hashedpassword = await argon2.hash(user_password, 10)


    //4. enter the user inside our database

    const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password, user_role) VALUES ($1,$2,$3,$4) RETURNING *",
        [user_name, user_email, hashedpassword, user_role]       
        );
       // res.json(newUser.rows[0]);

    //5. generating our jwt token
        const token = jwtGenerator(newUser.rows[0].user_id)
        console.log(token);
        res.json({token});
 
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

    //login route and apply middleware function

    router.post("/login", validateInfo, async (req,res) => {       
        //destruct the req.body
        const {user_email, user_password, role }  = req.body;

        if (!user_email || !user_password) {
            return res.status(400).json({message: 'All fields are Required'})
        }
 
       
        try {
            //retrieve emaill
            const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [user_email]);

            //check if user doesn't exist (if not then we throw error)
            if (user.rows.length === 0) {
                return res.status(401).json("User not found");
            }

           // compare password: check if incoming password is the same as the database password

            const isMatch = await argon2.verify(user.rows[0].user_password, user_password);
                if (!isMatch) {
                    return res.status(400).json({ message: "Invalid Credentials" });
                }
    
            // create JWT token      
            const token = jwtGenerator(user.rows[0].user_id);
            const user_role = user.rows[0].user_role;
            res.json({token, user_role, user_email});
           // res.status(200).json({message: 'Login Successfull', token});
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    });

    router.get("/is-verify", authorization, async (req, res) => {
        try {
                //if token is valid
                res.json(true);
            } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
     });

    router.get('/', (req, res) => {
        res.json({
            message: "Authentication API endpoints",
            endpoints: {
                register: "POST /auth/register",
                login: "POST /auth/login",
                verify: "GET /auth/is-verify"
            }
        });
    });

router.get("/users", async (req, res) => {
  try {
    const users = await pool.query("SELECT user_id, user_name, user_email, user_role FROM users");
    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


router.get("/users/count", async (req, res) => {
  try {
    const result = await pool.query("SELECT COUNT(*) FROM users");
    res.json({ count: result.rows[0].count });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default router;
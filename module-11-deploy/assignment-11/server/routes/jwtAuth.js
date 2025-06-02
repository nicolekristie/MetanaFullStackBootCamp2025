import express from "express";
const router = express.Router();
// import pool from "/Users/nicole/MetanaFullstackBootCamp/MetanaFullStackBootCamp2025/Authentication/assignment9/loginApp/server/db.js";
import pool from "../db.js";
import bcrypt from "bcrypt";
import jwtGenerator from "../utils/jwtGenerator.js";
import validInfo from "../middleware/validInfo.js";
import authorization from "../middleware/authorization.js";

//build routes

//register route > apply middleware function 

router.post("/register", validInfo, async (req, res) => {
  try {
    const { user_name, user_email, user_password, user_role } = req.body;

    const user = await pool.query(
      "SELECT * FROM users WHERE user_email = $1",
      [user_email]
    );

    if (user.rows.length !== 0) {
      return res.status(401).json("User already exists");
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(user_password, salt);

    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password, user_role) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_name, user_email, bcryptPassword, user_role || 'user']
    );

    const token = jwtGenerator(newUser.rows[0].user_id);
    res.json({ token });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

    //login route and apply middleware function

    router.post("/login", validInfo, async (req,res) => {       
        //destruct the req.body
        const {user_email, user_password }  = req.body;

        if (!user_email || !user_password) {
            return res.status(400).json({message: 'All fields are Required'})
        }
 
       
        try {
            //retrieve emaill
            const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [user_email]);

            //check if user doesn't exist (if not then we throw error)
            if (user.rows.length === 0) {
                return res.status(401).json("Email or Password is incorrect");
            }

           // compare password: check if incoming password is the same as the database password

            const validPassword = await bcrypt.compare(user_password, user.rows[0].user_password);
                if (!validPassword) {
                    return res.status(401).json("Email or Password is incorrect");
                }
    
            // create JWT token      
            const token = jwtGenerator(user.rows[0].user_id);
            res.json({ 
              token,
              user_role: user.rows[0].user_role,
              user_email: user.rows[0].user_email
            });
           // res.status(200).json({message: 'Login Successfull', token});
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    });

    router.get("/verify", authorization, async (req, res) => {
        try {
                //if token is valid
                res.json(true);
            } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
     })


export default router;
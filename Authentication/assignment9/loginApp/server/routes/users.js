import express from "express";
const app = express();
// import authPage from "../middleware/authPages.js";
import pool from "../db.js";
const router = express.Router();



app.use(express.json());



// router.get("/profile", authPage(["admin"]), async (req, res) =>

router.get("/users", async (req, res) => {

      alert("in users route")
    // const { user_name, user_email, user_password, user_role } = req.body;
   
        try {
          const user = await pool.query("SELECT * FROM users");   
          console.log(`Users.... ${user}`) 
          res.json(user.rows);
        } catch (err) {
          console.error("Error fetching users:", err);
          res.status(500).send("Server Error");
        }

 });

 export default router
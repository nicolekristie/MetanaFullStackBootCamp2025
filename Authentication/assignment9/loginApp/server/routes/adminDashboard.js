import express from "express";
const app = express();
import authPage from "../middleware/authPages.js";
import pool from "../db.js";
const router = express.Router();


app.use(express.json());

// router.get("/profile", authPage(["admin"]), async (req, res) =>

router.get("/adminDashboard", async (req, res) => {
    console.log("went to admin dashboard")
    const { user_name, user_email, user_password, user_role } = req.body
   
        try {
          const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
            user_email]);    
       
          res.json(user.rows[0]);
          console.log(`the user role: ${user.user_role}`);
        } catch (err) {
          console.error(err);
          res.status(500).json("Server Error");
        }

 });

 export default router
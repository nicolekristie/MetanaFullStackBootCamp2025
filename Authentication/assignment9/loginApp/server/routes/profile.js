import express from "express";
const router = express.Router();
import authPage from "../middleware/authPages.js";
import pool from "../db.js";

//pass an argument for all the users that are able to access this page
router.get("/", authPage(["admin"]), async (req, res) => {
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

router.get("/is-authorized", authPage, async (req, res) => {
    try {
        //if token is valid
        res.json(true);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

export default router;

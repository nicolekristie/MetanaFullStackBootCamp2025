import express from "express";
const app = express();
// import authPage from "../middleware/authPages.js";
import pool from "../db.js";
import authorization from "../middleware/authorization.js";
import checkRole from "../middleware/checkRole.js";
const router = express.Router();



app.use(express.json());



// router.get("/profile", authPage(["admin"]), async (req, res) =>

// Protected route - only accessible by admin users
router.get("/", authorization, checkRole("admin"), async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT user_id, user_name, user_email, user_role FROM users"
        );   
        console.log('Users fetched:', result.rows); 
        res.json(result.rows);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Server Error");
    }
});

export default router
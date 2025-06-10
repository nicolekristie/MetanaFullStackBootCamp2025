import express from "express";
const router = express.Router();
import pool from "../db.js";

router.get("/", async (req, res) => {
    try {
        const user = await pool.query("SELECT * FROM users");   
        console.log(`Users.... ${user}`) 
        res.json(user.rows);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Server Error");
    }
});

export default router;
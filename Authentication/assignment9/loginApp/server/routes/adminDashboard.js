import express from "express";
const router = express.Router();
import authPage from "../middleware/authPages.js";
import pool from "../db.js";

router.get("/", authPage(["admin"]), async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users");
        res.json(users.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

export default router;
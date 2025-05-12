import express from "express";
const router = express.Router();
import pool from "../db.js";
// import pool from "/Users/nicole/MetanaFullstackBootCamp/MetanaFullStackBootCamp2025/Authentication/assignment9/loginApp/server/db.js";
import authorization from "../middleware/authorization.js";

//build route > access req.user id
router.get("/", authorization, async (req, res) => {
  console.log(`Req user: ${req.user}`);

  try {
    //req.user has the payload
    // res.json(req.user);
    const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [
      req.user,
    ]);
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
});

export default router;

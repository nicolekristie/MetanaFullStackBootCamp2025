import jwt from "jsonwebtoken";
import pool from "../db.js";

//create 2 functions to run before each request

//pass in the permissions
const authPage = (permissions) => {
    return async (req, res, next) => {
        try {
            // Get token from header
            const token = req.header("token");
            if (!token) {
                return res.status(401).json("No token, authorization denied");
            }

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            // Get user role from database
            const result = await pool.query(
                "SELECT user_role FROM users WHERE user_id = $1",
                [decoded.user]
            );

            if (result.rows.length === 0) {
                return res.status(401).json("User not found");
            }

            const userRole = result.rows[0].user_role;

            if (permissions.includes(userRole)) {
                console.log(`user was an ${userRole}`)
                next();
            } else {
                return res.status(401).json("You don't have permission!");
            }
        } catch (err) {
            console.error(err);
            return res.status(401).json("Token is not valid");
        }
    };
};

export default authPage;
import pool from '../db.js';

const checkRole = (requiredRole) => {
    return async (req, res, next) => {
        try {
            // Get the user ID from the authorization middleware
            const userId = req.user;
            
            // Query the database to get the user's role
            const result = await pool.query(
                "SELECT user_role FROM users WHERE user_id = $1",
                [userId]
            );

            if (result.rows.length === 0) {
                return res.status(403).json("User not found");
            }

            const userRole = result.rows[0].user_role;

            // Check if the user has the required role
            if (userRole !== requiredRole) {
                return res.status(403).json("Access denied: Insufficient permissions");
            }

            next();
        } catch (err) {
            console.error(err.message);
            return res.status(500).json("Server Error");
        }
    };
};

export default checkRole; 
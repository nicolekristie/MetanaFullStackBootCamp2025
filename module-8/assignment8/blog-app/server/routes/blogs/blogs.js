import express from "express";
const router = express.Router();

import {
  getAllBlogs,
  createNewBlog,
  updateBlog,
  deleteBlog,
  getBlog,
} from "../../controllers/blogsController.js";

// Define routes

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await req.app.locals.client.query(
      "SELECT * FROM blogs WHERE blog_id = $1",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Database error:", err); // <-- Add this line
    res.status(500).json({ error: "Database error" });
  }
});

router.route("/").get(getAllBlogs).post(createNewBlog).delete(deleteBlog);

// router.route("/:id").get(getBlog).patch(updateBlog).delete(deleteBlog);

export default router;

import express from "express";
const router = express.Router(); //this is a router object to serve for everything we need
import {
  getAllBlogs,
  createNewBlog,
  updateBlog,
  deleteBlog,
  getBlog,
} from "../../controllers/blogsController.js"

// .//controllers/blogsController.js";


const app = express();
app.use(router);
app.use(express.json());

router.route("/").get(getAllBlogs).post(createNewBlog).delete(deleteBlog);

router.route("/:id").get(getBlog);

router.route("/:id").delete(deleteBlog);

router.route("/:id").patch(updateBlog);

export default router;

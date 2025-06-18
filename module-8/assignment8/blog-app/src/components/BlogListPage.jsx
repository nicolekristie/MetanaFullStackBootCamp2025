import React, { useEffect, useState } from "react";
import axios from "axios";
// import BlogDisplay from "..pages/BlogDisplay";
import { Link } from "react-router-dom";
import "../App.css";

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/blogs")
      .then((res) => {
        setBlogs(res.data);
        console.log("Fetched blogs:", res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  if (!loading) {
    console.log("Blogs array:", blogs);
  }
  if (loading) return <p>Loading blogs...</p>;
  if (!Array.isArray(blogs) || blogs.length === 0) return <p>No items found</p>;

  return (
    <div>
      {blogs.map((blog) => {
        console.log("Rendering blog:", blog);
        return (
          <Link
            key={blog.blog_id}
            to={`/blogs/${blog.blog_id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <BlogDisplay
              title={blog.title}
              blog_content={blog.blog_content}
              author={blog.author}
              created={blog.created}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default BlogListPage;

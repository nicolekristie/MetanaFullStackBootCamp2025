import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    axios
      .get("http://localhost:5050/blogs")
      .then((res) => {
        // Defensive: ensure res.data is an array
        if (Array.isArray(res.data)) {
          setBlogs(res.data);
        } else {
          setBlogs([]);
          console.error("API did not return an array:", res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setBlogs([]); // fallback to empty array on error
      });
  }, []);

  if (!Array.isArray(blogs) || blogs.length === 0) return <p>No items found</p>;

  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={blog.blog_id}
            onClick={() => setSelectedIndex(index)}
          >
            <Link
              to={`/blogs/${blog.blog_id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;

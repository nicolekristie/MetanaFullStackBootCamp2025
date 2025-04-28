import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import axios from "axios";
import Blog from "../components/Blog.jsx"


const BlogInfo = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/blogs")
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blog-items">
      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        blogs.map((blog, index) => (
          <Blog
            key={index}
            title={blog.title}
            blog_content={blog.blog_content}
            author={blog.author}
          />
        ))
      )}
    </div>
  );
};

export default BlogInfo;

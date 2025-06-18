import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogDisplay from "./BlogDisplay";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/blogs/${id}`)
      .then((res) => {
        setBlog(res.data);
        console.log("Fetched blog detail:", res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading blog...</p>;
  if (!blog) return <p>Blog not found</p>;
  console.log("Blog object:", blog); // <-- Add this line

  return (
    <BlogDisplay
      title={blog.title}
      blog_content={blog.blog_content}
      author={blog.author}
      created={blog.created}
    />
  );
};

export default BlogPage;

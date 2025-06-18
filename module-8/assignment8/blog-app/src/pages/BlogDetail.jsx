import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogDisplay from "../components/Blog"; // Adjust path if needed

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`/blogs/${id}`).then((res) => setBlog(res.data));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <BlogDisplay
      blog_id={blog.blog_id}
      title={blog.title}
      blog_content={blog.blog_content}
      author={blog.author}
      created={blog.created}
    />
  );
};

export default BlogDetail;
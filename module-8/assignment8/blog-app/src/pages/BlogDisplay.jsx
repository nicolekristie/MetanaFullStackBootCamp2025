import React from "react";
import "../App.css";


const BlogDisplay = ({ title, blog_content, author, created }) => (
  <div>
    <h2>{title}</h2>
    <p>By {author} | {created ? new Date(created).toLocaleDateString() : "Invalid Date"}</p>
    <div>{blog_content}</div>
  </div>
);



export default BlogDisplay;

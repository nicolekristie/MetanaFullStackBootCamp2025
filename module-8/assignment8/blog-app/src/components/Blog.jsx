import React from "react";
import { useParams } from "react-router";

const BlogDisplay = ({ blog_id, title, blog_content, author, created }) => {
  return (
    <div className="blog-display">
      <h3>{title}</h3>
      <p>
        <strong>Blog Content:</strong> {blog_content}
      </p>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>Created:</strong> {created}
      </p>
    </div>
  );
};

export default BlogDisplay;

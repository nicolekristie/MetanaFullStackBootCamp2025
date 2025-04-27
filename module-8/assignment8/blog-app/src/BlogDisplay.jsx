import React from 'react';

const BlogDisplay = ({ title, blog_content, author }) => {
  return (
    <div className="blog-info">
      <h3>{title}</h3>
      <p><strong>Blog Content:</strong> {blog_content}</p>
      <p><strong>Author:</strong> {author}</p>
    </div>
  );
};

export default BlogDisplay;

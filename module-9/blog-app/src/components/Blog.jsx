import React from 'react'


const Blog = ({ title, blog_content, author}) => {
  return (
    <div className="blog-display">
      <p className='blog-text'><strong>Title:</strong> {title}</p>
      <p className='blog-text'><strong>Blog Content:</strong> {blog_content}</p>
      <p className='blog-text'><strong>Author:</strong> {author}</p>
    </div>
  );
};

export default Blog;
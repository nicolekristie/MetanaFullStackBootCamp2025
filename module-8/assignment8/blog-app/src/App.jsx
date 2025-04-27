
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import axios from "axios";
import BlogDisplay from "./BlogDisplay";
import "./App.css";
import HomePage from "./pages/Home";
import AdminDashBoard from "./pages/AdminDashboard";
import BlogDetail from "./pages/BlogDetail";
import BlogListPage from "./pages/BlogListPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "../src/components/NavBar";
import BlogPage from "./pages/BlogPage";
import { GlobalStyles } from "./styles/GlobalStyles.style";

const App = () => {
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
    <div>
      {/* className="blog-list-container"
      style={{ display: "flex", flexDirection: "column", width: "185vh" }}
    > */}
      {(document.body.style.backgroundColor = "lightgreen")}

      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        blogs.map((blog) => (
          <BlogDisplay
            key={blog.id}
            title={blog.title}
            blog_content={blog.blog_content}
            author={blog.author}
            created={blog.created}
          />
        ))
      )}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/bloglist" element={<BlogListPage />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
          <Route path="/admindashboard" element={<AdminDashBoard />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/blogs/:id" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

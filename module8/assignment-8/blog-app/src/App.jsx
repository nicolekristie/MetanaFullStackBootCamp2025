import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import AdminDashBoard from "./pages/AdminDashboard";
import BlogDetail from "./pages/BlogDetail";
import BlogListPage from "./pages/BlogListPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/NavBar";
import BlogPage from "./pages/BlogPage";
import { useEffect, useState } from "react";
// import api from "./api/blogs";
import axios from 'axios';
// import { response } from "express";




export default function App({}) {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3500/blogs")
      .then((response) => setPosts(response.data))
      .catch((error) => {console.log(error)})
    })



  //fetch our data at load time
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs");     
        //automatically creates the json> and automatically catch erros that are not in the http 200 range
        setBlogs(response.data);
      } catch (error) {
        if (error.response) {
          //Not in the 200 response range
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.group(`Error: ${error.message}`);
        }
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
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
    </>
  );

}

import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { LoginContext } from "../Context/LoginContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
    user_name: "",
    user_role: "user", // default role
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitForm = async (e) => {
    console.log("Form Submitted:", formData);
    e.preventDefault(); //by default the page refreshes, this prevents the page from being refreshed
    const API_URL = import.meta.env.VITE_API_URL;
    try {
      const body = formData;
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
     <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>


      <form
        className="form-container w-100"
        onSubmit={onSubmitForm}
        style={{ maxWidth: 400 }}
      >
        <h1 className="reg-text text-center">Register</h1>
        <input
          type="email"
          name="user_email"
          placeholder="email"
          className="form-control my-3"
          value={formData.user_email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="user_password"
          placeholder="password"
          autoComplete="on"
          className="form-control my-3"
          value={formData.user_password}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="user_name"
          placeholder="name"
          className="form-control my-3"
          value={formData.user_name}
          onChange={handleInputChange}
        />
        <div className="drop-down-container w-100 mb-3">
          <label className="role-text" htmlFor="user_role">
            User Role:
          </label>
          <select
            id="user_role"
            name="user_role"
            value={formData.user_role}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">--Select User Role--</option>
            <option className="admin-select" value="admin">
              Admin
            </option>
            <option className="editor-select" value="editor">
              Editor
            </option>
            <option className="user-select" value="user">
              User
            </option>
          </select>
        </div>
        <button className="btn btn-success w-100">Submit</button>
        <br />
        <ToastContainer />
        <Link to="/home" className="d-block text-center mt-2">
          Home
        </Link>
      </form>
      </div>
    </>
  );
};

export default Register;

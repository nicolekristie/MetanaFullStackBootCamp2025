import React, { useEffect, useState } from "react";
import "../App.css";



function Login() {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    alert(`The name you entered was: ${userName}`);
  };

  return (
    <>
      <div className="login-container">
     
        <form className="login-form" onSubmit={handleSubmit}>
        <p className="title">Login Form</p>
          <div>
            <label className="text-lbl" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              value = {userName}
              id="login-username"
              name="login-name"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <p></p>
          <div>
            <label className="text-lbl" htmlFor="pass">
              Password:
            </label>
            <input
              type="text"
              value={password}
              id="pass" 
              name="login-password"
              autoComplete="off"
              required=""
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
 
          <input className="sign-in-btn" type="submit" value="Sign in"></input>
        </form>
      </div>
    </>
  );
}

export default Login;

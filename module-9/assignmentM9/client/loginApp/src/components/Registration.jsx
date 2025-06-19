// username, email, password, role

import React, { useEffect, useState } from "react";
import "../App.css";
import RegistrationPage from "../pages/RegistrationPage";

function Registration() {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    alert(`The name you entered was: ${userName}`);
  };

  return (
    <>
      <div className="registration-container">
        <form className="registration-form" onSubmit={handleSubmit}>
          <p className="title">Registration Form</p>
          <div>
            <label className="text-lbl" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              value={userName}
              id="reg-username"
              name="reg-name"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>

          <div>
            <label className="text-lbl" htmlFor="email">
              Email:
            </label>
            <input
              type="text"
              value={email}
              id="reg-email"
              name="register-email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label className="text-lbl" htmlFor="pass">
              Password:
            </label>
            <input
              type="test"
              value={password}
              id="register-password"
              name="reg-password"
              autoComplete="off"
              required=""
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <input className="sign-up-btn" type="submit" value="Sign-up"></input>
        </form>
      </div>
    </>
  );
}

export default Registration;

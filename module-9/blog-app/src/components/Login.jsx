import React, { useEffect, useState } from "react";


function Login() {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${userName}`);
  };

  return (
    <>
      <div className="login-container">
        <p className="title">Login Form</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label className="text-lbl" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              value = {userName}
              id="username"
              name="username"
            ></input>
          </div>
          <p></p>
          <div>
            <label className="text-lbl" htmlFor="pass">
              Password:
            </label>
            <input
              type="password"
              value={password}
              id="pass"
              name={password}
              autoComplete="off"
              required=""
            ></input>
          </div>

          <input type="submit" value="Sign in"></input>
        </form>
      </div>
    </>
  );
}

export default Login;

import React, { useState } from "react";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: "",
    user_name: "",
  });

  const { user_email, user_password, user_name } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const body = { user_email, user_password, user_name };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
  };



  fetch('/register', requestOptions)
      .then(response => response.json())
      .then(data => this.setInputs({ user_email: "", user_password: "", user_name :"" }));








    // try {
    //   const body = { user_email, user_password, user_name };
    //   const response = await fetch("/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(body),
    //   });

    //   if(response.status !==200){
    //     return
    //   }

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }

    //   const data = await response.json();
    //   console.log("Success:", data);
    //   // Optionally clear the form
    //   setInputs({ user_email: "", user_password: "", user_name :"" });
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  //     const onSubmitForm = (e) => {

  //         e.preventDefault();  //by default the page refreshes, this prevents the page from being refreshed
  //         try {

  //           const body = {user_email, user_password, user_name};

  //            const response = fetch("http://localhost:5173/Register", {
  //             method: "POST",
  //             headers: {"Content-type": "application/json"},
  //             body: JSON.stringify(body)
  //            });
  //            const parseRes = response.json();
  //            console.log(`Parse val: ${parseRes}`);
  //            console.log("testing")
  //            localStorage.setItem("token", parseRes.token)
  //            setAuth(true);

  //         } catch (err){
  //             console.error(err.message)
  //         }
  // };

  return (
    <>
      <h1 className="text-center my-5">Register</h1>
      <div
        style={{
          display: "flex",
          border: "2px solid black",
          padding: "10px",
          width: "800px",
        }}
        className="form-container"
      >
        <form
          onSubmit={onSubmitForm}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            style={{ width: "400px", height: "30px" }}
            type="email"
            name="user_email"
            placeholder="email"
            className="form-control my-3"
            value={user_email}
            onChange={(e) => onChange(e)}
          />
          <input
            style={{ width: "400px", height: "30px" }}
            type="password"
            name="user_password"
            placeholder="password"
            autoComplete="on"
            className="form-control my-3"
            value={user_password}
            onChange={(e) => onChange(e)}
          />
          <input
            style={{ width: "400px", height: "30px" }}
            type="text"
            name="user_name"
            placeholder="name"
            className="form-control my-3"
            value={user_name}
            onChange={(e) => onChange(e)}
          />
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
            }}
            className="btn btn-success btn-block"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;

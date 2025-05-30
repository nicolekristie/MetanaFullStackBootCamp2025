// // Login.jsx
// import React, { useContext, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import {LoginContext} from "../Context/LoginContext";

// const Login = () => {
//   const { isLoggedIn, onSubmitForm } = useContext(LoginContext);
//   const navigate = useNavigate();

//   const [inputs, setInputs] = useState({
//     user_email: "",
//     user_password: "",
//   });

//   const { user_email, user_password } = inputs;

//   const onChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     onSubmitForm(e, user_email, user_password, navigate);
//   };

//   return (
//     <>
//       <div>
//         {isLoggedIn ? <h1>You are logged in</h1> : <h1>You are NOT logged in</h1>}
//       </div>

//       <div
//         className="container"
//         style={{
//           display: "flex",
//           border: "5px solid green",
//           padding: "10px",
//           margin: "15px",
//           width: "500px",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <form
//           className="login-form-container"
//           onSubmit={handleSubmit}
//           style={{ display: "flex", flexDirection: "column", width: "100%" }}
//         >
//           <h1 className="login-text">Login</h1>

//           <input
//             style={{ width: "100%", height: "30px", color: "black" }}
//             type="email"
//             name="user_email"
//             placeholder="email"
//             className="form-control my-3"
//             value={user_email}
//             onChange={onChange}
//             required
//           />

//           <input
//             style={{ width: "100%", height: "30px" }}
//             type="password"
//             name="user_password"
//             placeholder="password"
//             autoComplete="on"
//             className="form-control my-3"
//             value={user_password}
//             onChange={onChange}
//             required
//           />

//           <button
//             type="submit"
//             style={{
//               backgroundColor: "green",
//               color: "white",
//               border: "none",
//               padding: "10px 20px",
//               cursor: "pointer",
//               marginTop: "10px",
//             }}
//             className="btn btn-primary"
//           >
//             Submit
//           </button>

//           <ToastContainer />

//           <div style={{ marginTop: "10px" }}>
//             <Link className="reg-link" to="/register" style={{ marginRight: "15px" }}>
//               Register
//             </Link>
//             <Link className="reg-link" to="/home">
//               Home
//             </Link>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;

import { useContext, useEffect, useState, Select } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { LoginContext, useLogin } from "../Context/LoginContext.jsx";
// import { useAuth } from '../Context/AuthContext'
//import { AuthContext } from "../Context/Authcontext";

const Login = () => {
  // const { isLoggedIn, setIsLoggedIn, onSubmitForm } = useContext(LoginContext);
  // const navigate = useNavigate();

  // const [email, setEmail] = useState("student@example.com");
  // const [password, setPassword] = useState("");
  const { login } = useLogin();
  const navigate = useNavigate();

  const { user, token } = useContext(LoginContext);

  console.log(`from user logincontext ${user}`);
  console.log(`from token logincontext ${token}`);
  console.log("here...");

  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: "",
  });

  const { user_email, user_password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmitForm(e, user_email, user_password, toast, navigate);
  // };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     console.log(user_email);
  //     console.log(user_password)
  //     const success = await login(user_email, user_password);
  //     if (success) {
  //       navigate("/dashboard");
  //     } else {
  //       alert('Login failed. Please check your credentials.')
  //     }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user_email, user_password);

    const success = await login(user_email, user_password);
    if (success) {
      navigate("/dashboard");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  // useEffect(() => {
  //   if (onSubmitForm) {
  //     onSubmitForm(); // Call it when the component mounts
  //   }
  // }, [onSubmitForm]);

  return (
    <>
      {/* <div>
        {isLoggedIn ? (
          <h1> You are logged in</h1>
        ) : (
          <h1> you are NOT logged in</h1>
        )}
        {console.log(`check isLoggedIn: ${isLoggedIn}`)}
      </div> */}
      <div
        className="container"
        style={{
          display: "flex",
          border: "5px solid green",
          padding: "10px",
          margin: "15px",
          width: "500px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="login-form-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 className="login-text">Login</h1>
          <input
            style={{ width: "400px", height: "30px", color: "red" }}
            type="email"
            name="user_email"
            placeholder="email"
            className="form-control my-3"
            value={user_email}
            onChange={(e) => onChange(e)}
          ></input>
          <input
            style={{ width: "400px", height: "30px" }}
            type="password"
            name="user_password"
            placeholder="password"
            autoComplete="on"
            className="form-control my-3"
            value={user_password}
            onChange={(e) => onChange(e)}
          ></input>
          {/* <b/> */}
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
            }}
            className="btn btn-primary"
          >
            Submit
          </button>
          <ToastContainer />
          <Link className="reg-link" to="/register">
            Register
          </Link>
          <Link className="reg-link" to="/home">
            Home
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;

//latest....

// import React, { useContext, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import LoginContext from "../Context/LoginContext.jsx";
// // import { AuthContext } from "../Context/Authcontext"; // Not used here, so keep commented

// const Login = ({children}) => {
//   // Context values from LoginContext
//   const { isLoggedIn, setIsLoggedIn, onSubmitForm} = useContext(LoginContext);

//   // React Router hooks
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/"; // where user came from or home

//   // Local state for inputs and role
//   const [inputs, setInputs] = useState({
//     user_email: "",
//     user_password: "",
//   });

//   const { user_email, user_password } = inputs;
//   const [role, setRole] = useState("");

//   // Handler for role change (not connected to any input currently)
//   const handleRoleChange = (e) => {
//     const selectedRole = e.target.value;
//     setRole(selectedRole);
//     console.log(`role set to: ${selectedRole}`);
//   };

//   // Input change handler — DO NOT preventDefault here, remove e.preventDefault()
//   // Because it's an input change event, not form submission
//   const onChange = (e) => {
//     // e.preventDefault();  // <-- REMOVE this line (commented)
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   // Form submit handler — calls context onSubmitForm with needed parameters
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmitForm(e, user_email, user_password, toast, navigate);
//   };

//   // Commented out useEffect calling onSubmitForm on mount — keep it commented because it's not needed
//   /*
//   useEffect(() => {
//     if (onSubmitForm) {
//       onSubmitForm(); // Don't call on mount, only on form submit
//     }
//   }, [onSubmitForm]);
//   */

//   /*
//   // Old local login function — commented because you use context now
//   const onSubmitForm = async (e) => {
//     e.preventDefault();
//     let firstName = user_email.split('@');
//     let name = firstName[0];
//     console.log(`the name: ${name}`);

//     // setAuthUser({Name: name});
//     // setIsLoggedIn(true);

//     try {
//       const body = { user_email, user_password };

//       const response = await fetch("http://localhost:8015/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       const parseRes = await response.json();

//       console.log(`the token is: ${parseRes.token}`);
//       console.log(`the role is: ${parseRes.user_role}`);
//       const user_role = parseRes.user_role;

//       console.log(`email: ${parseRes.user_email}`);

//       if (parseRes.token) {
//         console.log(`token: ${parseRes.token}`);
//         localStorage.setItem("token", parseRes.token);
//         localStorage.setItem("user_role", parseRes.user_role);
//         window.localStorage.setItem("loggedIn", true);
//         toast.success("login successfully!");
//         const user_role = window.localStorage.getItem("user_role");
//         console.log(`loggedin val: ${isLoggedIn}`);
//         navigate('/home');
//         console.log("after the navigation");
//         if (user_role === 'admin') {
//           console.log("user is an admin");
//           navigate('/adminDashboard');
//           console.log("after....");
//         } else if (user_role === 'editor') {
//           console.log("user is an editor");
//           navigate('/editor');
//         } else {
//           navigate('/home');
//         }
//       } else {
//         // Wrong assignment below, keep commented:
//         // setIsLoggedIn = window.localStorage.getItem("loggedIn");
//         toast.error(parseRes);
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
//   */

//   return (
//     <>
//       <div>
//         {isLoggedIn ? <h1>You are logged in</h1> : <h1>You are NOT logged in</h1>}
//         {console.log(`check isLoggedIn: ${isLoggedIn}`)}
//       </div>
//       <div
//         className="container"
//         style={{
//           display: "flex",
//           border: "5px solid green",
//           padding: "10px",
//           margin: "15px",
//           width: "500px",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <form
//           onSubmit={handleSubmit} // Use local handleSubmit here
//           className="login-form-container"
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             width: "100%",
//           }}
//         >
//           <h1 className="login-text">Login</h1>
//           <input
//             style={{ width: "400px", height: "30px", color: "red" }}
//             type="email"
//             name="user_email"
//             placeholder="email"
//             className="form-control my-3"
//             value={user_email}
//             onChange={onChange}
//           />
//           <input
//             style={{ width: "400px", height: "30px" }}
//             type="password"
//             name="user_password"
//             placeholder="password"
//             autoComplete="on"
//             className="form-control my-3"
//             value={user_password}
//             onChange={onChange}
//           />
//           <button
//             style={{
//               backgroundColor: "green",
//               color: "white",
//               border: "none",
//               padding: "10px 20px",
//               cursor: "pointer",
//             }}
//             className="btn btn-primary"
//             type="submit"
//           >
//             Submit
//           </button>
//           <ToastContainer />
//           <Link className="reg-link" to="/register">
//             Register
//           </Link>
//           <Link className="reg-link" to="/home">
//             Home
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;

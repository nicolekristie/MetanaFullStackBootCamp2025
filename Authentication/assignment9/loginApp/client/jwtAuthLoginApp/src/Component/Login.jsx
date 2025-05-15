import React,  {useContext, useEffect, useState, Select } from 'react';
import { Link , useNavigate, useLocation} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import { AuthContext } from '../context/AuthProvider.jsx';
import useAuth from "../hooks/useAuth.js"

import { AuthContext } from '../Context/Authcontext';




 const Login = ({setAuth}) => {  //pass in the props

  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"   //get where user came from or take back to home path

  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: ""
  });

  const {user_email, user_password } = inputs
  const [role, setRole] = useState('');
 
 
  //latest......
  // const { user_email, user_password, setUserEmail, setUserPassword , login } = useContext(AuthContext);

 const handleRoleChange = (e) => {
   const selectedRole = e.target.value;
   setRole(selectedRole)
   console.log(`role set to: ${selectedRole}`);
 }
   
// const storedRole = localStorage.getItem('user_role');

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  }


  const onChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value});
  };


  const onSubmitForm = async (e) => {
    e.preventDefault();
    localStorage.setItem("user_role", role);

    try{

      const body = { user_email, user_password };

      const response = await fetch("http://localhost:8015/auth/login" , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();


       if (parseRes.token) {
          console.log(`token: ${parseRes.token}`)
          localStorage.setItem("token", parseRes.token);
          setAuth(true);
          toast.success("login successfully!");
       } else {
        setAuth(false);
        toast.error(parseRes);
       }
       //after the form is cleared out....
       navigate(from, { replace: true} );   //Replace the success page for the login >n    navigate to where the use wants to go>
    } catch (err) {
      console.error(err.message);
    }   
    navigate("/profile");
  };

 //Add handle submit function


{/* <Select defaultValue={{ label: "Initial text", value: "initialText" }} /> */}

  return (
   <>
 
        <h1 className='login-text'>Login</h1>
        <div style={{ display: 'flex', border: '5px solid green', padding: '10px', width:'800px'}} >
          <form className="login-form-container" onSubmit={onSubmitForm} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <input style={{width: '400px', height: '30px'}} type = "email" name="user_email" placeholder='email' className='form-control my-3' value={user_email} onChange={e =>onChange(e)}></input>
            <input style={{width: '400px', height: '30px'}} type = "password" name="user_password" placeholder='password' autoComplete="on" className='form-control my-3' value={user_password} onChange={e =>onChange(e)}></input>
            <b/>
            {/* <!-- Dropdown Select --> */}
          <div className="drop-down-container">
            <label htmlFor="user-role">User Role:</label>
              <select id="user-role" name="user-role" value={role} onChange={handleRoleChange}>
                <option value="">--Select User Role--</option>
                <option className="admin-select" value="admin">Admin</option>
                <option className="editor-select" value="editor">Editor</option>
                <option className="user-select" value="user">User</option>
              </select>
            </div>
            <b></b>
            <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}className='btn btn-primary'>Submit</button>
            <ToastContainer />
            <Link className="reg-link" to="/register">Register</Link>
          </form> 
      </div> 
      {/* latest................. */}
      {/* <h1 className='login-text'>Login</h1>
        <div style={{ display: 'flex', border: '5px solid green', padding: '10px', width:'800px'}} className='login-form-container' >
          <form onSubmit={onSubmitForm} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <input style={{width: '400px', height: '30px'}} type = "email" name="user_email" placeholder='email' className='form-control my-3' value={user_email} onChange={handleEmailChange}></input>
            <input style={{width: '400px', height: '30px'}} type = "password" name="user_password" placeholder='password' autoComplete="on" className='form-control my-3' value={user_password} onChange={handlePasswordChange}></input>
            <button onClick= {login} style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}className='btn btn-primary'>Submit</button>
            <ToastContainer />
            <Link className="reg-link" to="/register">Register</Link>
          </form> 
        
      </div> */}


    </>
  )
}

export default Login
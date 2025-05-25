import React,  {useContext, useEffect, useState, Select } from 'react';
import { Link , useNavigate, useLocation} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { LoginContext } from '../Context/Authcontext';
import Editor from './Editor.jsx';
// import  { useAuth } from '../Context/AuthContextLatest.jsx'
import useAuth from '../hooks/useAuth'
 

  const Login = () => {  //pass in the props

  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"   //get where user came from or take back to home path

  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: ""
  });

  // const [user_email, setEmail] = useState('');
  // const [user_password, setPassword] = useState('');
  const { user, login, logout, isAuthenticated, loading } = useAuth(true);

  const {user_email, user_password } = inputs
  const [role, setRole] = useState('');


 const handleRoleChange = (e) => {
   const selectedRole = e.target.value;
   setRole(selectedRole)
   console.log(`role set to: ${selectedRole}`);
 }
   

  const onChange = (e) => {
    e.preventDefault();
    setInputs({...inputs, [e.target.name]: e.target.value});
  };


  const onSubmitForm = async (e) => {
    e.preventDefault();
    let firstName = user_email.split('@');
    let name = firstName[0];
    console.log(`the name: ${name}`)


    try{

      const body = { user_email, user_password};

      const response = await fetch("http://localhost:8015/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

        const parseRes = await response.json();
  
        console.log(`the token is: ${parseRes.token}`)
        console.log(`the role is: ${parseRes.user_role}`)
        const user_role = parseRes.user_role;

        console.log(`email: ${parseRes.user_email}`)
        console.log(`pwd: ${parseRes.user_password}`)


       //5/23 updates
      // const isAuthenticated = login(parseRes.user_email, parseRes.user_password);
      // if (true) {
      //   console.log('user is authenticated')
      //   // setEmail('');
      //   // setPassword('');
      // }
      // else {
      //   console.error('Authentication failed!');
      // }

///////////////////////////////////////////////////

  if (parseRes.token) {
    console.log(`token: ${parseRes.token}`)
    localStorage.setItem("token", parseRes.token);
    localStorage.setItem("user_role", parseRes.user_role);
    localStorage.setItem("user_name", name);
    window.localStorage.setItem("loggedIn", true);
    //  isAuthenticated = true;
    toast.success("login successfully!");
    if (user_role === 'admin') {
      console.log("user is an admin")
      navigate('/adminDashboard');
      console.log("after....")
    } else if (user_role === 'editor') {
      console.log("user is an editor")
      navigate('/editor');
    } else {
      navigate('/profile');
    }

  } else {
    // isAuthenticated = false;
  toast.error(parseRes);
  }









   } catch (err) {
     console.error(err.message);
   }     


   console.log(`the user is ${isAuthenticated}`)



 
  };


  return (
    <>
        {loading && <h1 className='landing-heading'>Loading...</h1>}
       {
         !loading && (
            <>
              {!isAuthenticated ? ( <div className="login-form">
                  <h1> Welcome, {isAuthenticated}! </h1>
                {/* </div>) }
                </> */}
              
              <div className="d-flex justify-content-center">
                <button onClick={logout} className='btn btn-danger'>
                    Logout
                </button>
                </div>
              </div>) : (
             
              <div classsname="container" style={{ display: 'flex', border: '5px solid green', padding: '10px', margin: '15px', width:'500px'}} >
                 
                <form className="login-form-container" onSubmit={onSubmitForm} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 className='login-text'>Login</h1>
                  <input style={{width: '400px', height: '30px', color: "red"}} type = "email" name="user_email" placeholder='email' className='form-control my-3' value={user_email} onChange={e =>onChange(e)}></input>
                  <input style={{width: '400px', height: '30px'}} type = "password" name="user_password" placeholder='password' autoComplete="on" className='form-control my-3' value={user_password} onChange={e =>onChange(e)}></input>
                  <b/>
                  <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}className='btn btn-primary'>Submit</button>
                  <ToastContainer />
                  <Link className="reg-link" to="/register">Register</Link>
                  <Link className="reg-link" to="/home">Home</Link>
                </form> 
              </div> )}
          )
            </>
         )

       }
     </>
   )
 }


export default Login
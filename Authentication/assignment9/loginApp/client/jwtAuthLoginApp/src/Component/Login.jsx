import React,  {useContext, useEffect, useState, Select } from 'react';
import { Link , useNavigate, useLocation} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useLogin}  from '../Context/LoginContext.jsx';

 

  const Login = () => {  

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"   //get where user came from or take back to home path

  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: ""
  });

  const {user_email, user_password } = inputs
  const [role, setRole] = useState('');


 const { firstName, isLoggedIn, login} = useLogin();
 console.log(`the firstname: ${firstName}`);

  const handleSubmit = async (e, user_role) => {
    e.preventDefault();
    const success = await login(user_email, user_password);
    console.log(`the success value is ${success}`)
  
    user_role = localStorage.getItem("user_role")
      console.log(`the handle submit role ${user_role}`)
    if (success) {
      console.log('In success ');
       if (user_role === "admin") {
          console.log("user is an admin");
          navigate("/adminDashboard");
          return true;
        } else if (user_role === "editor") {
          console.log("user is an editor");
          navigate("/editor");
        } else 

      {
        navigate("/dashboard");
      }

     
    }
  };


 const handleRoleChange = (e) => {
   const selectedRole = e.target.value;
   setRole(selectedRole)
   console.log(`role set to: ${selectedRole}`);
 }
   

  const onChange = (e) => {
    e.preventDefault();
    setInputs({...inputs, [e.target.name]: e.target.value});
  };

   
  return (
    <>
       <div>
            {isLoggedIn ? <h1> You are logged in</h1> : <h1> you are NOT logged in</h1>}
            {console.log(`check isLoggedIn: ${isLoggedIn}`)}
       </div>                                
              <div classsname="container" style={{ display: 'flex', border: '5px solid green', padding: '10px', margin: '15px', width:'500px'}} >
                <form onSubmit={handleSubmit}className="login-form-container"  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <h1 className='login-text'>Login</h1>
                  <input style={{width: '400px', height: '30px', color: "red"}} type = "email" name="user_email" placeholder='email' className='form-control my-3' value={user_email} onChange={e =>onChange(e)}></input>
                  <input style={{width: '400px', height: '30px'}} type = "password" name="user_password" placeholder='password' autoComplete="on" className='form-control my-3' value={user_password} onChange={e =>onChange(e)}></input>
                  {/* <b/> */}
                  <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}className='btn btn-primary'>Submit</button>
                  <ToastContainer />
                  <Link className="reg-link" to="/register">Register</Link>
                  <Link className="reg-link" to="/home">Home</Link>
                </form> 
              </div>
    </>
   )
 }


export default Login
import React,  {useEffect, useState} from 'react';
import { Link , useNavigate, useLocation} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useAuth from "../hooks/useAuth.js"






 const Login = ({setAuth}) => {  //pass in the props

  // const { setAuth } = useAuth(setAuth)     
  //const { setAuth} = useAuth();   //use global auth in other parts of the app

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"   //get where user came from or take back to home path

  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: ""
  });

  const {user_email, user_password } = inputs

  // const userRef = useRef();
  // const errRef = userRef();

  // useEffect(()=> {
  //   userRef.current.focus();
  // }, [])

  // useEffect(()=> {
  //   setErrMsg('');
  // }, [user, pwd]);



  const onChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value});
  };

  const onSubmitForm = async(e) => {
    e.preventDefault()
    try{

      const body = { user_email, user_password };

      const response = await fetch("http://localhost:8015/auth/login" , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();
    

       if (parseRes.token) {
         console.log('the token is set')
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
  };

 //Add handle submit function



  return (
    <>
        <h1 className='login-text'>Login</h1>
        <div style={{ display: 'flex', border: '5px solid green', padding: '10px', width:'800px'}} className='login-form-container' >
          <form onSubmit={onSubmitForm} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <input style={{width: '400px', height: '30px'}} type = "email" name="user_email" placeholder='email' className='form-control my-3' value={user_email} onChange={e =>onChange(e)}></input>
            <input style={{width: '400px', height: '30px'}} type = "password" name="user_password" placeholder='password' autoComplete="on" className='form-control my-3' value={user_password} onChange={e =>onChange(e)}></input>
            <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}className='btn btn-primary'>Submit</button>
            <ToastContainer />
            <Link className="reg-link" to="/register">Register</Link>
          </form>
        
      </div>
    </>
  )
}

export default Login
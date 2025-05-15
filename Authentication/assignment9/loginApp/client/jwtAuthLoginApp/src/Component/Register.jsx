import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



const Register = ({setAuth}) => {
  
  const navigate = useNavigate();


    const [inputs, setInputs] =useState ({
        user_email: "",
        user_password: "",
        user_name: "",
        user_role: ""
    });

    const {user_email, user_password, user_name, user_role } = inputs;
    
    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    };

    const onSubmitForm = async(e) => { 
 
        e.preventDefault();  //by default the page refreshes, this prevents the page from being refreshed
        try {

          const body = {user_email, user_password, user_name, user_role};

           const response = await fetch("http://localhost:8015/auth/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)   
           });

           
           ///add the same logic from login to use toast
          //  const parseRes = await response.json();
          //  console.log(`Parse val: ${parseRes.token}`);
          //  console.log(`Role: ${parseRes.user_role}`);

          //  localStorage.setItem("token", parseRes.token);
          //  localStorage.setItem("user_role", parseRes.user_role);
           setAuth(true);
           navigate('/profile');

        } catch (err){
            console.error(err.message)
        }
  
};


    return (
      <>
      <h1 className='reg-text'>Register</h1>
      <div style={{ display: 'flex', border: '5px solid green', width:'800px'}} className='reg-form-container'>
        <form onSubmit={onSubmitForm} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <input style={{width: '400px', height: '30px'}}type="email" name="user_email" placeholder="email" className='form-control my-3' value={user_email} onChange={e=> onChange(e)}/>
            <input style={{width: '400px', height: '30px'}} type="password" name="user_password" placeholder="password" autoComplete="on" className='form-control my-3' value={user_password} onChange={e=> onChange(e)}/>
            <input style={{width: '400px', height: '30px'}} type="text" name="user_name" placeholder="name" className='form-control my-3' value={user_name} onChange={e=> onChange(e)} />
            <input style={{width: '400px', height: '30px'}} type="text" name="user_role" placeholder="role" className='form-control my-3' value={user_role} onChange={e=> onChange(e)} />
            <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }} className='btn btn-success btn-block'>Submit</button>
             <ToastContainer />
            <Link to="/home">Home</Link>
        </form>
        {/* <Link to="/login">Login</Link> */}
    </div>
      </>
    )
   
  }



export default Register
import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { LoginContext } from '../Context/LoginContext.jsx';



const Register = () => {
  
  const navigate = useNavigate();


    const [formData, setFormData] = useState({
      user_email: "",
      user_password: "",
      user_name: "",
      user_role: 'user', // default role
    });

      const handleInputChange = (event) => {
      const { name, value } = event.target;

    
  
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const onSubmitForm = async(e) => { 
      
    
 
      console.log('Form Submitted:', formData);
        e.preventDefault();  //by default the page refreshes, this prevents the page from being refreshed
        try {
          const body = formData;
           const response = await fetch("http://localhost:8015/auth/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)   
           });

           navigate('/profile');

        } catch (err){
            console.error(err.message)
        }
};


    return (
      <>  
      <div style={{ display: 'flex', border: '5px solid green', width:'800px'}} className='reg-form-container'>
        <form onSubmit={onSubmitForm} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1 className='reg-text'>Register</h1>
            <input style={{width: '400px', height: '30px'}}type="email" name="user_email" placeholder="email" className='form-control my-3' value={formData.user_email} onChange={handleInputChange}/>
            <input style={{width: '400px', height: '30px'}} type="password" name="user_password" placeholder="password" autoComplete="on" className='form-control my-3' value={formData.user_password} onChange={handleInputChange}/>
            <input style={{width: '400px', height: '30px'}} type="text" name="user_name" placeholder="name" className='form-control my-3' value={formData.user_name} onChange={handleInputChange} />
            {/* <input style={{width: '400px', height: '30px'}} type="text" name="user_role" placeholder="role" className='form-control my-3' value={user_role} onChange={e=> onChange(e)} /> */}
            <div className="drop-down-container">
            <label className="role-text" htmlFor="user_role">User Role:</label>
              <select id="user_role" name="user_role" value={formData.user_role} onChange={handleInputChange}>
                <option value="">--Select User Role--</option>
                <option className="admin-select" value="admin">Admin</option>
                <option className="editor-select" value="editor">Editor</option>
                <option className="user-select" value="user">User</option>
              </select>
            </div>
            <b></b>
            <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }} className='btn btn-success btn-block'>Submit</button>
             <br/>
            <ToastContainer />
            <Link to="/home">Home</Link>
        </form>
    </div>
      </>
    )  
  }



export default Register
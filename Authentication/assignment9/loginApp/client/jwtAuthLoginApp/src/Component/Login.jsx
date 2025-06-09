import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useLogin } from '../Context/LoginContext.jsx';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: ""
  });

  const { user_email, user_password } = inputs;
  const { isLoggedIn, login } = useLogin();

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      const user_role = localStorage.getItem("user_role");
      if (user_role === "admin") {
        navigate("/adminDashboard");
      } else if (user_role === "editor") {
        navigate("/editor");
      } else {
        navigate("/dashboard");
      }
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(user_email, user_password);
    
    if (success) {
      const user_role = localStorage.getItem("user_role");
      if (user_role === "admin") {
        navigate("/adminDashboard");
      } else if (user_role === "editor") {
        navigate("/editor");
      } else {
        navigate("/dashboard");
      }
    }
  };

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // If logged in, don't render the form
  if (isLoggedIn) {
    return null;
  }

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h1 style={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input className='input'
            type="email"
            name="user_email"
            placeholder="Email"
            value={user_email}
            onChange={onChange}
            style={styles.input}
          />
          <input className='input'
            type="password"
            name="user_password"
            placeholder="Password"
            autoComplete="current-password"
            value={user_password}
            onChange={onChange}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
          
          <div style={styles.links}>
            <Link to="/register" style={styles.link}>Register</Link>
            <Link to="/home" style={styles.link}>Home</Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  },
  loginBox: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px'
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    backgroundColor: '#f0f8ff',
    color: '#222'
    },
  button: {
    padding: '12px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    ':hover': {
      backgroundColor: '#006400'
    }
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px'
  },
  link: {
    color: 'green',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  }
};

export default Login;
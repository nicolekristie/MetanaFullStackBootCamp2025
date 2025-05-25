import { Link, Outlet } from 'react-router-dom';
import Logout from './Logout';
import { LoginContext } from '../Context/LoginContext.jsx';



const Dashboard = () => {
  
    return (
        <div>
          <h1>DASHBOARD PAGE...........................................</h1>
            <nav className="topnav-centered" style={styles.navbar}>
              <Link to="/register" style={styles.link}>Register</Link> 
              <Link to="/profile" style={styles.link}>Profile</Link>
              <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            </nav>
            <main style={styles.main}>
              <Outlet /> {/* This will render the matched route's component */}
            </main>
            <Logout/>
        </div>

  );
};

    const styles = {
        navbar: {
          display: 'flex', 
          gap: '1rem',
          backgroundColor: 'green',
          padding: '1rem',
          position: 'fixed',
          top: 0, 
          width: 800,
        },
        link: {
          color: 'white',
          textDecoration: 'none',
        },
        main: {
          padding: '2rem',
        },
      };


export default Dashboard

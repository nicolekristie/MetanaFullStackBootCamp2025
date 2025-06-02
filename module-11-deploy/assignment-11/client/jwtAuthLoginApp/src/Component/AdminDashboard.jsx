import React, { useState, useEffect } from 'react';
import { useLogin } from '../Context/LoginContext';
import { Navigate, Link } from 'react-router-dom';
import Logout from './Logout';
import { fetchUsers } from '../api/fetchUsers';

function AdminDashboard() {
  const { isLoggedIn, user_role } = useLogin();
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Redirect if not logged in or not an admin
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  
  if (user_role !== 'admin') {
    return <Navigate to="/unauthorized" />;
  }

  useEffect(() => {
    async function loadUserCount() {
      try {
        setLoading(true);
        const userData = await fetchUsers();
        setUserCount(userData.length);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching user count:', err);
      } finally {
        setLoading(false);
      }
    }

    loadUserCount();
  }, []);

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h2 style={styles.navTitle}>Admin Dashboard</h2>
        <div style={styles.navLinks}>
          <Link to="/home" style={styles.navLink}>Home</Link>
          <Link to="/users" style={styles.navLink}>Manage Users</Link>
        </div>
        <div style={styles.logoutContainer}>
          <Logout />
        </div>
      </nav>
      
      <main style={styles.main}>
        <div style={styles.content}>
          <h1 style={styles.title}>Welcome to Admin Dashboard</h1>
          <div style={styles.statsContainer}>
            <Link to="/users" style={styles.statCard}>
              <h3>Total Users</h3>
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p style={styles.errorText}>Error loading users</p>
              ) : (
                <>
                  <p>{userCount}</p>
                  <span style={styles.viewMore}>View All Users →</span>
                </>
              )}
            </Link>
            <div style={styles.statCard}>
              <h3>Active Sessions</h3>
              <p>3</p>
            </div>
            <div style={styles.statCard}>
              <h3>System Status</h3>
              <p>Online</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    padding: '1rem 2rem',
    color: 'white'
  },
  navTitle: {
    margin: 0,
    fontSize: '1.5rem'
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
    marginLeft: '2rem'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,0.1)'
    }
  },
  logoutContainer: {
    marginLeft: 'auto'
  },
  main: {
    padding: '2rem'
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  title: {
    color: '#2c3e50',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  },
  statCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'transform 0.2s, box-shadow 0.2s',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    '& h3': {
      color: '#2c3e50',
      marginBottom: '1rem'
    },
    '& p': {
      fontSize: '2rem',
      color: '#3498db',
      margin: '0 0 1rem 0'
    }
  },
  viewMore: {
    display: 'block',
    color: '#3498db',
    marginTop: '1rem',
    fontSize: '0.9rem'
  },
  errorText: {
    color: '#dc3545',
    fontSize: '1rem'
  }
};

export default AdminDashboard;
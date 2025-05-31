import { Link, Outlet, useNavigate, Navigate } from 'react-router-dom';
import Logout from './Logout';
import { useLogin } from '../Context/LoginContext';
import { useEffect } from 'react';

const Dashboard = () => {
    const { user_role, isLoggedIn } = useLogin();
    const navigate = useNavigate();
    const isAdmin = user_role === 'admin' || localStorage.getItem('user_role') === 'admin';

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === '/users' && !isAdmin) {
            navigate('/unauthorized');
        }
    }, [isAdmin, navigate]);

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div style={styles.container}>
            <nav style={styles.navbar}>
                <div style={styles.navLinks}>
                    <Link to="/home" style={styles.link}>Home</Link>
                    <Link to="/profile" style={styles.link}>Profile</Link>
                    {isAdmin && (
                        <Link to="/users" style={styles.link}>Users</Link>
                    )}
                </div>
                <div style={styles.logoutContainer}>
                    <Logout />
                </div>
            </nav>
            <main style={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: '1rem 2rem',
        position: 'fixed',
        top: 0,
        width: '100%',
        boxSizing: 'border-box',
        zIndex: 1000
    },
    navLinks: {
        display: 'flex',
        gap: '1rem'
    },
    link: {
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
        padding: '5rem 2rem 2rem',
        flex: 1
    }
};

export default Dashboard;

import { useEffect, useState } from "react";
import { fetchUsers } from "../api/fetchUsers";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useLogin } from "../Context/LoginContext";
import Logout from './Logout';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { user_role } = useLogin();
    const isAdmin = user_role === 'admin' || localStorage.getItem('user_role') === 'admin';

    useEffect(() => {
        // Redirect non-admin users
        if (!isAdmin) {
            navigate('/unauthorized', { 
                state: { from: location.pathname }
            });
            return;
        }

        async function loadUsers() {
            try {
                setLoading(true);
                setError(null);
                const userData = await fetchUsers();
                setUsers(userData);
            } catch (err) {
                if (err.message.includes('403')) {
                    navigate('/unauthorized', { 
                        state: { from: location.pathname }
                    });
                } else {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        }
        
        loadUsers();
    }, [isAdmin, navigate, location]);

    if (loading) {
        return (
            <div style={styles.container}>
                <div style={styles.navbar}>
                    <Link to="/adminDashboard" style={styles.backButton}>← Back to Dashboard</Link>
                    <h2 style={styles.navTitle}>User Management</h2>
                    <div style={styles.logoutContainer}>
                        <Logout />
                    </div>
                </div>
                <div style={styles.loadingContainer}>
                    <h2>Loading users...</h2>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={styles.container}>
                <div style={styles.navbar}>
                    <Link to="/adminDashboard" style={styles.backButton}>← Back to Dashboard</Link>
                    <h2 style={styles.navTitle}>User Management</h2>
                    <div style={styles.logoutContainer}>
                        <Logout />
                    </div>
                </div>
                <div style={styles.errorContainer}>
                    <h2>Error</h2>
                    <p style={styles.error}>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.navbar}>
                <Link to="/adminDashboard" style={styles.backButton}>← Back to Dashboard</Link>
                <h2 style={styles.navTitle}>User Management</h2>
                <div style={styles.logoutContainer}>
                    <Logout />
                </div>
            </div>
            
            <div style={styles.content}>
                <div style={styles.userGrid}>
                    {users.length === 0 ? (
                        <p>No users found.</p>
                    ) : (
                        users.map((user) => (
                            <div key={user.user_id} style={styles.userCard}>
                                <h3>{user.user_name}</h3>
                                <p>Email: {user.user_email}</p>
                                <p>Role: {user.user_role || 'User'}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
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
    backButton: {
        color: 'white',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        transition: 'background-color 0.2s',
        ':hover': {
            backgroundColor: 'rgba(255,255,255,0.1)'
        }
    },
    navTitle: {
        margin: 0,
        fontSize: '1.5rem'
    },
    logoutContainer: {
        marginLeft: 'auto'
    },
    content: {
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
    },
    loadingContainer: {
        textAlign: 'center',
        padding: '2rem'
    },
    errorContainer: {
        padding: '2rem',
        textAlign: 'center'
    },
    userGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px 0'
    },
    userCard: {
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        '& h3': {
            margin: '0 0 1rem 0',
            color: '#2c3e50'
        },
        '& p': {
            margin: '0.5rem 0',
            color: '#34495e'
        }
    },
    error: {
        color: '#dc3545',
        padding: '1rem',
        backgroundColor: '#ffebee',
        borderRadius: '4px',
        margin: '1rem 0'
    }
};

export default Users;

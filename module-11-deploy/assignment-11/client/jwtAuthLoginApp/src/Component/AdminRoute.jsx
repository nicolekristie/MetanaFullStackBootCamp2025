import { Navigate } from 'react-router-dom';
import { useLogin } from '../Context/LoginContext';

const AdminRoute = ({ children }) => {
    const { user_role } = useLogin();
    const isAdmin = user_role === 'admin' || localStorage.getItem('user_role') === 'admin';

    if (!isAdmin) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default AdminRoute; 
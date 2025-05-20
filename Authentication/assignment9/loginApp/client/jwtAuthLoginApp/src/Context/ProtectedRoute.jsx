import { useAuth } from './AuthContextLatest';
import { Navigate, Outlet} from 'react-router-dom';


export const ProtectedRoute = ({ roles }) => {
    const {isAuthenticated, role } = useAuth();
    if (!isAuthenticated) return <Navigate to="/login"/>;
    if (roles && !roles.includes(role)) return <Navigate to="/error"/>;
    return <Outlet />
    


}
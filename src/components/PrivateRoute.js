import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export default function PrivateRoute({ children }) {
    const currentUser = useAuth();

    // eslint-disable-next-line consistent-return
    return currentUser ? children : <Navigate to="/login" />;
}

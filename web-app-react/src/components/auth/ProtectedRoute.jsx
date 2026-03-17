import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="h-screen w-screen flex items-center justify-center">Loading...</div>; // Simplest loading state
  }

  if (!isAuthenticated) {
    // Redirect to login but save the current location to return to later
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;

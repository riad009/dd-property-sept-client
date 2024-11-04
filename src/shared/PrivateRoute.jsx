import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';

export default function PrivateRoute({ children }) {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to='/' state={{ from: location }} replace />;
}

PrivateRoute.displayName = 'PrivateRoute';

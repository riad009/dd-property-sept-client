import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user?.email) {
    return children;
  }

  return <Navigate to='/' state={{ from: location }} replace />;
}

PrivateRoute.displayName = 'PrivateRoute';

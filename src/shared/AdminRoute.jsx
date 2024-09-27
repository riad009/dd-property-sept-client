import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';

export default function AdminRoute({ children }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user?.role === 'admin') {
    return children;
  }

  return <Navigate to='/' state={{ from: location }} replace />;
}

AdminRoute.displayName = 'AdminRoute';

import { Navigate, useLocation } from "react-router-dom";
//import { useAuth } from "../providers/AuthProvider";

export default function ({ children }) {
  // const { currentUser } = useAuth();
  const location = useLocation();

  // if (currentUser) {
  //   return children;
  // }

  return <Navigate to="/" state={{ from: location }} replace />;
}

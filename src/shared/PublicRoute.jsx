import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
//import { useAuth } from "../providers/AuthProvider";

export default function PublicRoute({ children }) {
  const { user } = useContext(AuthContext)

  const { state } = useLocation();
  const route = state?.from?.pathname || "/";

  return !user ? children : <Navigate to={route} />;
}

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

export default function ({ children }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user?.email === "sevenadmin@gmail.com") {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
}

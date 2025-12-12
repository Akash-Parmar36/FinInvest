// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const ProtectedRoute = ({ children }) => {
  const { auth , isInitialLoading} = useAuth();
  
  if(isInitialLoading) return null;
  
  // If no token, user is not logged in
  if (!auth.token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children; // show protected page
};

export default ProtectedRoute;

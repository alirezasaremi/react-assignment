
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAllowed = localStorage.getItem('token');

  return isAllowed ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

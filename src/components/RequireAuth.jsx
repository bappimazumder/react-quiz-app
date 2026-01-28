import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../contexts/UseAuth";

export default function RequireAuth() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

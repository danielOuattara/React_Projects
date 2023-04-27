import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function PrivateRoute() {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  } else {
    return <Outlet />;
  }
}

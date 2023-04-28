import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function PrivateRouteLayout() {
  const { isAuthenticated, user } = useAuth0();
  if (isAuthenticated && user) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
}

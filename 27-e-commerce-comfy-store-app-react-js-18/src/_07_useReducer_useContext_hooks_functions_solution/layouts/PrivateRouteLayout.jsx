import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserContext } from "../context";

export default function PrivateRouteLayout() {
  // const { isAuthenticated, user } = useAuth0();
  const { loginWithRedirect, logout, myUser, isAuthenticated } =
    useUserContext();
  if (isAuthenticated && myUser) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}

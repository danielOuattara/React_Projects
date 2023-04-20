import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function PrivateRoute() {
  return <h2>private route component</h2>;
}

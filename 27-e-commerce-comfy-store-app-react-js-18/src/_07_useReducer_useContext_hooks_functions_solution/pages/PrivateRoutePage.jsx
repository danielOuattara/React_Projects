import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
import { useUserContext } from "../context";

export default function PrivateRoutePage() {
  return <h4>Private Route</h4>;
}

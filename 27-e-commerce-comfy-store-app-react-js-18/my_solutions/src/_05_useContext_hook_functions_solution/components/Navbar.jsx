import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavbarWrapper } from "./../wrappers";
//---------------------------------------------------

export default function Navbar() {
  console.log(useAuth0());
  const { isAuthenticated, logout, user } = useAuth0();
  return (
    <NavbarWrapper>
      {isAuthenticated && user && user.picture && (
        <img src={user.picture} alt={user.name} />
      )}
      {isAuthenticated && user && user.name && (
        <>
          <h4>Welcome {user.name.toLocaleUpperCase()}</h4>
          <button
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
          >
            logout
          </button>
        </>
      )}
    </NavbarWrapper>
  );
}

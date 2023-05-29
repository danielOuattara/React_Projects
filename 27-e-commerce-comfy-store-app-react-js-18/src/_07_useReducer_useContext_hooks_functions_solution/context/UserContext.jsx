import { useContext, createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } =
    useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    // console.log("user = ", user);
    // console.log("isAuthenticated = ", isAuthenticated);
    // console.log("isLoading = ", isLoading);

    if (isAuthenticated) {
      setMyUser(user);
    } else {
      setMyUser(null);
    }
  }, [isAuthenticated, user]);

  return (
    <UserContext.Provider
      value={{ loginWithRedirect, logout, myUser, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};

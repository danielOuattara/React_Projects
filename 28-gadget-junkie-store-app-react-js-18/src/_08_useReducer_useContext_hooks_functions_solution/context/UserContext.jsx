import { useContext, createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const { loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  return useContext(UserContext);
};

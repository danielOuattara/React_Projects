import { useContext, createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  return (
    <UserContext.Provider value="user context">{children}</UserContext.Provider>
  );
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};

import { useEffect, createContext } from "react";
import useFetchingUsers from "../customHooks/useFetchingUsers";

export const UsersContext = createContext();

export default function UsersContextProvider(props) {
  const { usersFetchedState, fetchingUsers } = useFetchingUsers();

  useEffect(() => {
    fetchingUsers();
  }, []);
  return (
    <UsersContext.Provider value={{ usersFetchedState, fetchingUsers }}>
      {props.children}
    </UsersContext.Provider>
  );
}

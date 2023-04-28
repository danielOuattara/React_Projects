import { createContext } from "react";
import useFetchingSingleUser from "./../customHooks/useFetchingSingleUser";

export const SingleUserContext = createContext();

export default function SingleUserContextProvider(props) {
  const { singleState, fetchSingleUser } = useFetchingSingleUser();
  return (
    <SingleUserContext.Provider value={{ singleState, fetchSingleUser }}>
      {props.children}
    </SingleUserContext.Provider>
  );
}

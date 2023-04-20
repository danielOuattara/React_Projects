import React, { useContext, useReducer } from "react";
//-----------------------------------------------------------------

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export const AppContext = React.createContext();

const initialCartItemsState = {};

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer();

  //---------------

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

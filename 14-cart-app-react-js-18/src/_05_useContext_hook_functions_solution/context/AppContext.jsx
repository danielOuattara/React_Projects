import React, { useContext } from "react";
import useFetchBag from "../customHooks/useFetchBag";
//-----------------------------------------------------------------

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export const AppContext = React.createContext();

export default function AppContextProvider({ children }) {
  const {
    state,
    setState,
    clearCart,
    removeItem,
    decreaseAmount,
    increaseAmount,
  } = useFetchBag();

  return (
    <AppContext.Provider
      value={{
        ...state,
        setState,
        clearCart,
        removeItem,
        decreaseAmount,
        increaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

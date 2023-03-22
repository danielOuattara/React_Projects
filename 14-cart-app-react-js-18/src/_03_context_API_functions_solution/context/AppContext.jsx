import { createContext } from "react";
import useFetchBag from "../customHooks/useFetchBag";
//-----------------------------------------------------------------

export const AppContext = createContext();

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

import { useContext, useState, createContext } from "react";
// import useFetchBag from "../customHooks/useFetchBag";
//-----------------------------------------------------------------

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <AppContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
}

import { useContext, useState, createContext } from "react";
// import useFetchBag from "../customHooks/useFetchBag";
//-----------------------------------------------------------------

// make sure use

export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default function AppContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, setIsDarkTheme, toggleDarkTheme }}
    >
      {children}
    </AppContext.Provider>
  );
}

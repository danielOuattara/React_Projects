import { useContext, useState, createContext, useEffect } from "react";
//-----------------------------------------------------------------

// make sure use
export const AppContext = createContext();

const getPreferredDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)",
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  return storedDarkMode || prefersDarkMode;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default function AppContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(getPreferredDarkMode());
  const [searchTerm, setSearchTerm] = useState("fish");

  const toggleDarkTheme = () => {
    setIsDarkTheme(() => !isDarkTheme);
    // document.body.classList.toggle("dark-theme", isDarkTheme);
    localStorage.setItem("darkTheme", !isDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
}

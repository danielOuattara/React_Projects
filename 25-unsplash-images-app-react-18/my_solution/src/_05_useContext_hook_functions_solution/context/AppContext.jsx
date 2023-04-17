import { useContext, useState, createContext } from "react";
//-----------------------------------------------------------------

// make sure use
export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default function AppContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleDarkTheme = () => {
    setIsDarkTheme(() => !isDarkTheme);
    document.body.classList.toggle("dark-theme", isDarkTheme);
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
}

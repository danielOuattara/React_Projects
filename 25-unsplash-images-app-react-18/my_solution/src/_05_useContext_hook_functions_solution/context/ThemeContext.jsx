import { useContext, useState, createContext, useEffect } from "react";
//-----------------------------------------------------------------

export const ThemeContext = createContext();

//-----

const getUserPreferredThemeMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)",
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  return storedDarkMode || prefersDarkMode;
};

//---

export default function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(getUserPreferredThemeMode());

  const toggleDarkTheme = () => {
    setIsDarkTheme(() => !isDarkTheme);
    // document.body.classList.toggle("dark-theme", isDarkTheme);
    localStorage.setItem("darkTheme", !isDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//---

// make sure use
export const useThemeContext = () => useContext(ThemeContext);

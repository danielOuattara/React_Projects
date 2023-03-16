import { useState, createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{ isSideBarOpen, setIsSideBarOpen, isModalOpen, setIsModalOpen }}
    >
      {children}
    </AppContext.Provider>
  );
}

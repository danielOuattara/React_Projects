import { useState, createContext } from "react";

export const SidebarContext = createContext();

export default function SidebarContextProvider({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <SidebarContext.Provider
      value={{ isSideBarOpen, setIsSideBarOpen, isModalOpen, setIsModalOpen }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

import { useReducer, createContext, useContext } from "react";
import { sidebarReducer } from "../reducer/sidebar/sidebarReducer";
import { toggleModal, toggleSidebar } from "../reducer/sidebar/sidebarActions";

const SidebarContext = createContext();

const initialSiBarState = {
  isSidebarOpen: false,
  isModalOpen: false,
};

export default function SidebarContextProvider({ children }) {
  const [sidebarState, dispatchSidebar] = useReducer(
    sidebarReducer,
    initialSiBarState,
  );

  const handleToggleSidebar = () => {
    return dispatchSidebar(toggleSidebar());
  };

  const handleToggleModal = () => {
    return dispatchSidebar(toggleModal());
  };

  return (
    <SidebarContext.Provider
      value={{ ...sidebarState, handleToggleModal, handleToggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarContext = () => useContext(SidebarContext); //<--this

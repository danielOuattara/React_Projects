import { useReducer } from "react";
import { Modal, Sidebar, Home } from "./components";
import { sidebarReducer } from "./reducer/sidebar/sidebarReducer";
import { toggleModal, toggleSidebar } from "./reducer/sidebar/sidebarActions";

const initialSiBarState = {
  isSidebarOpen: false,
  isModalOpen: false,
};

export default function AppFunctionUseReducer() {
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
    <>
      <p className="title">useReducer hook functions solution</p>
      <Home
        handleToggleSidebar={handleToggleSidebar}
        handleToggleModal={handleToggleModal}
      />
      <Modal
        isModalOpen={sidebarState.isModalOpen}
        handleToggleModal={handleToggleModal}
      />
      <Sidebar
        isSidebarOpen={sidebarState.isSidebarOpen}
        handleToggleSidebar={handleToggleSidebar}
      />
    </>
  );
}

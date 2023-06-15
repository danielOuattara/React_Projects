import { Modal, Sidebar, Home } from "./components";
import SidebarContextProvider from "./context/SidebarContext";

export default function AppFunctionContextAPIUseContextHook() {
  return (
    <SidebarContextProvider>
      <p className="title">context API + useContext hook solutions</p>
      <Home />
      <Modal />
      <Sidebar />
    </SidebarContextProvider>
  );
}

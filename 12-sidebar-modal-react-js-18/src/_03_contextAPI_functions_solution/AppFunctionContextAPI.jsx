import { Modal, Sidebar, Home } from "./components";
import SidebarContextProvider from "./context/SidebarContext";

export default function AppFunctionContextAPI() {
  return (
    <SidebarContextProvider>
      <p className="title">context API + functions solution</p>
      <Home />
      <Modal />
      <Sidebar />
    </SidebarContextProvider>
  );
}

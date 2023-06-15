import { Modal, Sidebar, Home } from "./components";
import SidebarContextProvider from "./context/SidebarContext";

export default function AppFunctionUseReducerUseContext() {
  return (
    <SidebarContextProvider>
      <p className="title">useReducer + useContext functions solution</p>
      <Home />
      <Modal />
      <Sidebar />
    </SidebarContextProvider>
  );
}

import { Modal, Sidebar, Home } from "./components";
import SidebarContextProvider from "./context/SidebarContext";
export default function AppFunctionUseReducerContextAPI() {
  return (
    <SidebarContextProvider>
      <p className="title">useReducer + context API functions solution</p>
      <Home />
      <Modal />
      <Sidebar />
    </SidebarContextProvider>
  );
}

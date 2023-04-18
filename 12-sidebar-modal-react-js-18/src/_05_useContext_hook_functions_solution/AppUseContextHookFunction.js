import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AppContextProvider from "./context/AppContext";

export default function AppUseContextHookFunction() {
  return (
    <AppContextProvider>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>useContext hook function solution</p>
      <Home />
      <Modal />
      <Sidebar />
    </AppContextProvider>
  );
}

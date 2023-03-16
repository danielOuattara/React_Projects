import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AppContextProvider from "./context/AppContext";

export default function AppContextAPIFunction() {
  return (
    <AppContextProvider>
      <p style={{ textAlign: "center" }}>context API function solution</p>
      <Home />
      <Modal />
      <Sidebar />
    </AppContextProvider>
  );
}

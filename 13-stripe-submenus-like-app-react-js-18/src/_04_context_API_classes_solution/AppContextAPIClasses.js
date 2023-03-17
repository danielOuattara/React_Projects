import AppContextProvider from "./context/AppContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
//---------------------------------------------------

export default function AppContextAPIFunction() {
  return (
    <AppContextProvider>
      <p style={{ textAlign: "center" }}> context API classes solution</p>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppContextProvider>
  );
}

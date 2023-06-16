import SubMenusContextProvider from "./context/SubMenusContext";
import { Hero, Navbar, Sidebar, Submenu } from "./components";

export default function AppFunctionContextAPIUseContextHook() {
  return (
    <SubMenusContextProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </SubMenusContextProvider>
  );
}

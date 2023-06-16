import { Hero, Navbar, Sidebar, Submenu } from "./components";
import SubMenusContextProvider from "./context/SubMenusContext";
export default function AppFunctionUseReducerUseContext() {
  return (
    <SubMenusContextProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </SubMenusContextProvider>
  );
}

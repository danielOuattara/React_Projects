import SubMenusContextProvider from "./context/SubMenusContext";
import { Hero, Navbar, Sidebar, SubmenuContainer } from "./components";

export default function AppFunctionContextAPI() {
  return (
    <SubMenusContextProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <SubmenuContainer />
    </SubMenusContextProvider>
  );
}

import { Hero, Navbar, Sidebar, SubmenuContainer } from "./components";
import SubMenusContextProvider from "./context/SubMenusContext";
export default function AppFunctionUseReducerContextAPI() {
  return (
    <SubMenusContextProvider>
      <Navbar />

      <Sidebar />

      <Hero />

      <SubmenuContainer />
    </SubMenusContextProvider>
  );
}

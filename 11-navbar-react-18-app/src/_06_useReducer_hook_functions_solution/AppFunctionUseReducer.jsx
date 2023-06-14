import { useReducer } from "react";
import { navbarReducer } from "./reducer/navbarReducer";
import Navbar from "./components/Navbar";

const initialNavbarState = {
  showLinks: false,
};

export default function AppFunctionUseReducer() {
  const [navbarState, dispatchNavbar] = useReducer(
    navbarReducer,
    initialNavbarState,
  );
  return (
    <>
      <p className="title">useReducer function solution</p>
      <Navbar
        showLinks={navbarState.showLinks}
        dispatchNavbar={dispatchNavbar}
      />
    </>
  );
}

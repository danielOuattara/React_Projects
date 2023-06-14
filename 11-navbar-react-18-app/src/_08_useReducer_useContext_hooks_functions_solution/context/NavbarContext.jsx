import { createContext, useContext, useReducer } from "react";
import { navbarReducer } from "./../reducer/navbarReducer";

const NavbarContext = createContext();

const initialNavbarState = {
  showLinks: false,
};

export default function NavbarContextProvider(props) {
  const [navbarState, dispatchNavbar] = useReducer(
    navbarReducer,
    initialNavbarState,
  );

  const context = {
    showLinks: navbarState.showLinks,
    dispatchNavbar,
  };
  return (
    <NavbarContext.Provider value={context}>
      {props.children}
    </NavbarContext.Provider>
  );
}

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};

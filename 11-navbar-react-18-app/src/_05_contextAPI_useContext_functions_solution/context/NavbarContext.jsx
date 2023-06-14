import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export default function NavbarContextProvider(props) {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <NavbarContext.Provider value={{ showLinks, setShowLinks }}>
      {props.children}
    </NavbarContext.Provider>
  );
}

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};

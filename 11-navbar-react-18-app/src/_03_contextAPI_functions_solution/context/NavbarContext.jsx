import { createContext, useState } from "react";

export const NavbarContext = createContext();

export default function NavbarContextProvider(props) {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <NavbarContext.Provider value={{ showLinks, setShowLinks }}>
      {props.children}
    </NavbarContext.Provider>
  );
}

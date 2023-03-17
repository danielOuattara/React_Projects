import { useState, createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider(props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [subMenuLocation, setSubMenuLocation] = useState({
    subMenuCenterPosition: 0,
    subMenuTopPosition: 0,
  });
  const [subMenuPageShown, setSubMenuPageShown] = useState({
    page: "",
    links: [],
  });

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        setIsSideBarOpen,
        isSubMenuOpen,
        setIsSubMenuOpen,
        subMenuLocation,
        setSubMenuLocation,
        subMenuPageShown,
        setSubMenuPageShown,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

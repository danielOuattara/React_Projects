import { useState, createContext, useContext } from "react";

export const SubMenusContext = createContext();

export default function SubMenusContextProvider(props) {
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

  const context = {
    isSideBarOpen,
    setIsSideBarOpen,
    isSubMenuOpen,
    setIsSubMenuOpen,
    subMenuLocation,
    setSubMenuLocation,
    subMenuPageShown,
    setSubMenuPageShown,
  };

  return (
    <SubMenusContext.Provider value={context}>
      {props.children}
    </SubMenusContext.Provider>
  );
}

export const useSubMenusContext = () => {
  return useContext(SubMenusContext);
};

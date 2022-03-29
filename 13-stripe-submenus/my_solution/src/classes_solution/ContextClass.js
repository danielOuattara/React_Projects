import React, { useState, useContext } from "react";
import sublinks from "../data";

const AppContext = React.createContext();

function AppContextProviderFunction(props) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuLocation, setSubMenuLocation] = useState({
    centerPosition: "",
    topPosition: "",
  });
  const [subMenuPageShown, setSubMenuPageShown] = useState({page:'', links:[]});

  return (
    <AppContext.Provider
      value={{
        sideBarOpen,
        setSideBarOpen,
        subMenuOpen,
        setSubMenuOpen,
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
export default AppContextProviderFunction;

// custom hook method
export const useGlobalContext = () => {
  return useContext(AppContext);
};

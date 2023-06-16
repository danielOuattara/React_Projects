import { createContext, useContext, useReducer } from "react";
import { stripeSubMenusReducer } from "./../reducer/stripeSubMenus/stripeSubMenusReducer";
import {
  toggleSideBar,
  toggleSubMenus,
  setSubMenuLocation,
  setSubMenuPageShown,
} from "./../reducer/stripeSubMenus/stripeSubMenusActions";

const SubMenusContext = createContext();

const initialStripeSubMenus = {
  isSideBarOpen: false,
  isSubMenuOpen: false,
  subMenuLocation: {
    subMenuCenterPosition: 0,
    subMenuTopPosition: 0,
  },
  subMenuPageShown: {
    page: "",
    links: [],
  },
};

export default function SubMenusContextProvider(props) {
  const [stripeSubMenusState, dispatchStripeSubMenus] = useReducer(
    stripeSubMenusReducer,
    initialStripeSubMenus,
  );

  const handleToggleSideBar = (bool) => {
    return dispatchStripeSubMenus(toggleSideBar(bool));
  };
  const handleToggleSubMenus = (bool) => {
    return dispatchStripeSubMenus(toggleSubMenus(bool));
  };
  const handleSetSubMenuLocation = (objectArg) => {
    return dispatchStripeSubMenus(setSubMenuLocation(objectArg));
  };
  const handleSetSubMenuPageShown = (objectArg) => {
    return dispatchStripeSubMenus(setSubMenuPageShown(objectArg));
  };

  const context = {
    isSideBarOpen: stripeSubMenusState.isSideBarOpen,
    isSubMenuOpen: stripeSubMenusState.isSubMenuOpen,
    subMenuLocation: stripeSubMenusState.subMenuLocation,
    subMenuPageShown: stripeSubMenusState.subMenuPageShown,

    handleToggleSideBar,
    handleToggleSubMenus,
    handleSetSubMenuLocation,
    handleSetSubMenuPageShown,
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

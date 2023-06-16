import { useReducer } from "react";
import { Hero, Navbar, Sidebar, Submenu } from "./components";
import { stripeSubMenusReducer } from "./reducer/stripeSubMenus/stripeSubMenusReducer";
import {
  toggleSideBar,
  toggleSubMenus,
  setSubMenuLocation,
  setSubMenuPageShown,
} from "./reducer/stripeSubMenus/stripeSubMenusActions";

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

export default function AppFunctionUseReducer() {
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

  return (
    <>
      <Navbar
        handleToggleSideBar={handleToggleSideBar}
        handleToggleSubMenus={handleToggleSubMenus}
        handleSetSubMenuLocation={handleSetSubMenuLocation}
        handleSetSubMenuPageShown={handleSetSubMenuPageShown}
      />

      <Sidebar
        isSideBarOpen={stripeSubMenusState.isSideBarOpen}
        handleToggleSideBar={handleToggleSideBar}
      />

      <Hero handleToggleSubMenus={handleToggleSubMenus} />

      <Submenu
        isSubMenuOpen={stripeSubMenusState.isSubMenuOpen}
        subMenuLocation={stripeSubMenusState.subMenuLocation}
        subMenuPageShown={stripeSubMenusState.subMenuPageShown}
      />
    </>
  );
}

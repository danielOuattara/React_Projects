const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
const TOGGLE_SUBMENUS = "TOGGLE_SUBMENUS";
const SET_SUBMENUS_LOCATION = "SET_SUBMENUS_LOCATION";
const SET_SUBMENUS_PAGE_SHOWN = "SET_SUBMENUS_PAGE_SHOWN";

const toggleSideBar = (boolArg) => {
  return {
    type: TOGGLE_SIDEBAR,
    payload: boolArg,
  };
};
const toggleSubMenu = (boolArg) => {
  return {
    type: TOGGLE_SUBMENUS,
    payload: boolArg,
  };
};

const setSubMenuLocation = (objectArg) => {
  return {
    type: SET_SUBMENUS_LOCATION,
    payload: objectArg,
  };
};

const setSubMenuPageShown = (objectArg) => {
  return {
    type: SET_SUBMENUS_PAGE_SHOWN,
    payload: objectArg,
  };
};

export {
  TOGGLE_SIDEBAR,
  TOGGLE_SUBMENUS,
  SET_SUBMENUS_LOCATION,
  SET_SUBMENUS_PAGE_SHOWN,
  toggleSideBar,
  toggleSubMenu,
  setSubMenuLocation,
  setSubMenuPageShown,
};

import {
  TOGGLE_SIDEBAR,
  TOGGLE_SUBMENUS,
  SET_SUBMENUS_LOCATION,
  SET_SUBMENUS_PAGE_SHOWN,
} from "./stripeSubMenusActions";

const initialState = {
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

export const stripeSubMenusReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: action.payload,
      };
    case TOGGLE_SUBMENUS:
      return {
        ...state,
        isSubMenuOpen: action.payload,
      };
    case SET_SUBMENUS_LOCATION:
      return {
        ...state,
        subMenuLocation: {
          ...state.subMenuLocation,
          subMenuCenterPosition: action.payload["subMenuCenterPosition"],
          subMenuTopPosition: action.payload["subMenuTopPosition"],
        },
      };
    case SET_SUBMENUS_PAGE_SHOWN:
      return {
        ...state,
        subMenuPageShown: {
          ...state.subMenuPageShown,
          page: action.payload["page"],
          links: action.payload["links"],
        },
      };
    default:
      return state;
  }
};

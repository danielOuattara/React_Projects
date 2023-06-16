import { createSlice } from "@reduxjs/toolkit";

const initialStripeSubMenusState = {
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

const stripeSubMenusSlice = createSlice({
  name: "stripeSubMenus-slice",
  initialState: initialStripeSubMenusState,
  reducers: {
    toggleSideBar: (state, action) => {
      state.isSideBarOpen = action.payload;
    },
    toggleSubMenu: (state, action) => {
      state.isSubMenuOpen = action.payload;
    },

    setSubMenuLocation: (state, action) => {
      return {
        ...state,
        subMenuLocation: {
          ...state.subMenuLocation,
          subMenuCenterPosition: action.payload["subMenuCenterPosition"],
          subMenuTopPosition: action.payload["subMenuTopPosition"],
        },
      };
    },

    setSubMenuPageShown: (state, action) => {
      return {
        ...state,
        subMenuPageShown: {
          ...state.subMenuPageShown,
          page: action.payload["page"],
          links: action.payload["links"],
        },
      };
    },
  },
});

export const stripeSubMenusSliceActions = stripeSubMenusSlice.actions;

export default stripeSubMenusSlice.reducer;

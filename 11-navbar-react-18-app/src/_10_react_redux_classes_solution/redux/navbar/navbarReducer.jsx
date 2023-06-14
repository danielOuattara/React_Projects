import { SET_SHOW_LINKS } from "./navbarActions";

const initialNavbarState = {
  showLinks: false,
};

export const navbarReducer = (state = initialNavbarState, action) => {
  switch (action.type) {
    case SET_SHOW_LINKS:
      return {
        ...state,
        showLinks: !state.showLinks,
      };

    default:
      return { ...state };
  }
};

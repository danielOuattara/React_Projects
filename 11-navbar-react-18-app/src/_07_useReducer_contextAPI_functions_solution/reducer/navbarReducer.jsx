import { SET_SHOW_LINKS } from "./navbarActions";

export const navbarReducer = (state, action) => {
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

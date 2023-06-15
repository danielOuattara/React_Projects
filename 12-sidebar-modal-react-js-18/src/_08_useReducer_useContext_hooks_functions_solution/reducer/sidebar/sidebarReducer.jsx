import { TOGGLE_SIDEBAR, TOGGLE_MODAL } from "./sidebarActions";

export const sidebarReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };

    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    default:
      return {
        ...state,
      };
  }
};

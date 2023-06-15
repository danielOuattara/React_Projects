import { TOGGLE_SIDEBAR, TOGGLE_MODAL } from "./sidebarActions";

const initialSidebarState = {
  isSidebarOpen: false,
  isModalOpen: false,
};

export const sidebarReducer = (state = initialSidebarState, action) => {
  console.log(state);
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

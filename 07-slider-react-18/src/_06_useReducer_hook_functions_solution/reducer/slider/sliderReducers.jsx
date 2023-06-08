import { HANDLE_CHECK_INDEX, HANDLE_UPDATE_INDEX } from "./slidersAction";

export const slidersReducer = (state, action) => {
  switch (action.type) {
    case HANDLE_UPDATE_INDEX:
      return {
        ...state,
        index: state.index + action.payload,
      };

    case HANDLE_CHECK_INDEX:
      let newIndex = "";
      if (action.payload === -1) {
        newIndex = state.people.length - 1;
      } else if (action.payload === state.people.length) {
        newIndex = 0;
      } else {
        newIndex = action.payload;
      }
      return {
        ...state,
        index: newIndex,
      };

    default:
      return state;
  }
};

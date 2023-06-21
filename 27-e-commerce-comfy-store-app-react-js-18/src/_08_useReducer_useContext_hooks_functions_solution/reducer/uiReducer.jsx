import { TOGGLE_SIDEBAR } from "../actions/actions";

export default function uiReducer(state, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: !state.isSideBarOpen,
      };

    default:
      return state;
  }
}

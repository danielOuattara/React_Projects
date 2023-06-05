import { SELECT_CATEGORY } from "./menusAction";
export default function menuReducer(state, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        category: action.payload.newCategory,
      };

    default:
      return state;
  }
}

import { SELECT_CATEGORY } from "./menusAction";

import menusData from "./../../../data";

const categories = ["all", ...new Set(menusData.map((item) => item.category))];

const menuInitialState = {
  category: "all",
  categories,
};

export default function menuReducer(state = menuInitialState, action) {
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

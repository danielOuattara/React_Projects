import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions/actions";

const filterReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
      };

    default:
      return state;
  }
};

export default filterReducer;

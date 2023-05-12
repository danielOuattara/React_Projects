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

    case SET_LISTVIEW:
      return {
        ...state,
        isGridViewLayout: false,
      };

    case SET_GRIDVIEW:
      return {
        ...state,
        isGridViewLayout: true,
      };
    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case SORT_PRODUCTS:
      if (state.sort === "price-lowest") {
        return {
          ...state,
          filteredProducts: state.allProducts.sort(function (a, b) {
            return a.price - b.price;
          }),
        };
      }

      if (state.sort === "price-highest") {
        return {
          ...state,
          filteredProducts: state.allProducts.sort(function (a, b) {
            return b.price - a.price;
          }),
        };
      }

      if (state.sort === "name-a") {
        return {
          ...state,
          filteredProducts: state.allProducts.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          }),
        };
      }

      if (state.sort === "name-z") {
        return {
          ...state,
          filteredProducts: state.allProducts.sort(function (a, b) {
            return b.name.localeCompare(a.name);
          }),
        };
      }

      return state;

    default:
      return state;
  }
};

export default filterReducer;

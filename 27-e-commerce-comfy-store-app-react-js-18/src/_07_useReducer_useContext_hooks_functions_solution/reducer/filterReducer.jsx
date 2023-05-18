import {
  LOAD_PRODUCTS,
  SET_LIST_VIEW,
  SET_GRID_VIEW,
  UPDATE_SORT_BY,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions/actions";

const filterReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      const arrayOfPrice = action.payload.map((item) => item.price);
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: {
          ...state.filters,
          rangeMinPrice: arrayOfPrice.reduce(
            (a, b) => Math.min(a, b),
            +Infinity,
          ),
          rangeMaxPrice: arrayOfPrice.reduce(
            (a, b) => Math.max(a, b),
            -Infinity,
          ),
          rangeSelectedPrice: arrayOfPrice.reduce(
            (a, b) => Math.max(a, b),
            -Infinity,
          ),
        },
      };

    case SET_LIST_VIEW:
      return {
        ...state,
        isGridViewLayout: false,
      };

    case SET_GRID_VIEW:
      return {
        ...state,
        isGridViewLayout: true,
      };

    case UPDATE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };

    case UPDATE_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    case SORT_PRODUCTS:
      if (state.sortBy === "price-lowest") {
        return {
          ...state,
          filteredProducts: state.allProducts.sort(function (a, b) {
            return a.price - b.price;
          }),
        };
      }

      if (state.sortBy === "price-highest") {
        return {
          ...state,
          filteredProducts: state.allProducts.sort(function (a, b) {
            return b.price - a.price;
          }),
        };
      }

      if (state.sortBy === "name-a") {
        return {
          ...state,
          filteredProducts: state.allProducts.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          }),
        };
      }

      if (state.sortBy === "name-z") {
        return {
          ...state,
          filteredProducts: state.allProducts.sort(function (a, b) {
            return b.name.localeCompare(a.name);
          }),
        };
      }

      return state;

    case FILTER_PRODUCTS:
      console.log("Filtering products");
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default filterReducer;

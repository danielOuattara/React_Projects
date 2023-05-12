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

    case UPDATE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
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

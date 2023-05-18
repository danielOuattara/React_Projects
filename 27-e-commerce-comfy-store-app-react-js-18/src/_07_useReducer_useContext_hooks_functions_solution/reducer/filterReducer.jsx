import { startTransition } from "react";
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
    //---------------------------------------------------
    case LOAD_PRODUCTS:
      const arrayOfPrices = action.payload.map((item) => item.price);
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: {
          ...state.filters,
          rangeMinPrice: arrayOfPrices.reduce(
            (a, b) => Math.min(a, b),
            +Infinity,
          ),
          rangeMaxPrice: arrayOfPrices.reduce(
            (a, b) => Math.max(a, b),
            -Infinity,
          ),
          rangeSelectedPrice: arrayOfPrices.reduce(
            (a, b) => Math.max(a, b),
            -Infinity,
          ),
        },
      };

    //---------------------------------------------------
    case SET_LIST_VIEW:
      return {
        ...state,
        isGridViewLayout: false,
      };

    //---------------------------------------------------
    case SET_GRID_VIEW:
      return {
        ...state,
        isGridViewLayout: true,
      };

    //---------------------------------------------------
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };

    //---------------------------------------------------
    case UPDATE_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    //---------------------------------------------------
    case SORT_PRODUCTS:
      let sortedProducts = [];
      if (state.sortBy === "price-lowest") {
        sortedProducts = state.filteredProducts.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (state.sortBy === "price-highest") {
        sortedProducts = state.filteredProducts.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (state.sortBy === "name-a") {
        sortedProducts = state.filteredProducts.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
      }

      if (state.sortBy === "name-z") {
        sortedProducts = state.filteredProducts.sort(function (a, b) {
          return b.name.localeCompare(a.name);
        });
      }

      return { ...state, sortedProducts };

    //---------------------------------------------------
    case FILTER_PRODUCTS:
      let updatedProducts = [...state.allProducts];

      if (state.filters.text) {
        updatedProducts = state.allProducts.filter((item) =>
          item.name.toLowerCase().includes(state.filters.text.toLowerCase()),
        );
      }

      if (state.filters.category !== "all") {
        updatedProducts = updatedProducts.filter(
          (item) => item.category === state.filters.category,
        );
      }

      if (state.filters.company !== "all") {
        updatedProducts = updatedProducts.filter(
          (item) => item.company === state.filters.company,
        );
      }

      if (state.filters.color !== "all") {
        updatedProducts = updatedProducts.filter((item) =>
          item.colors.includes(state.filters.color),
        );
      }

      if (state.filters.rangeSelectedPrice <= state.filters.rangeMaxPrice) {
        updatedProducts = updatedProducts.filter(
          (item) =>
            item.price <= state.filters.rangeSelectedPrice &&
            item.price >= state.filters.rangeMinPrice,
        );
      }

      if (state.filters.isFreeShipping) {
        updatedProducts = updatedProducts.filter((item) => item.shipping);
      }

      return { ...state, filteredProducts: updatedProducts };

    //---------------------------------------------------
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          rangeSelectedPrice: state.filters.rangeMaxPrice,
          isFreeShipping: false,
        },
      };

    //---------------------------------------------------
    default:
      return state;
  }
};

export default filterReducer;

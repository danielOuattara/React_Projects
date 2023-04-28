import React, { useEffect, useContext, useReducer } from "react";
import { filterReducer } from "./../reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions/actions";
import { useProductsContext } from "./../context";

const initialState = {};

const FilterContext = React.createContext();

export default function FilterContextProvider({ children }) {
  return (
    <FilterContext.Provider value="filter context">
      {children}
    </FilterContext.Provider>
  );
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};

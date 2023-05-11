/* goals:

- filtering
- sorting
- changing UI the views
*/

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

//-----------------------------------------------------------

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridViewLayout: false,
};

const FilterContext = React.createContext();

export default function FilterContextProvider({ children }) {
  const { products } = useProductsContext();

  const [filterState, dispatchFilter] = useReducer(filterReducer, initialState);

  useEffect(() => {
    dispatchFilter({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  console.log("filterState = ", filterState);

  return (
    <FilterContext.Provider value={{ ...filterState }}>
      {children}
    </FilterContext.Provider>
  );
}

// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};

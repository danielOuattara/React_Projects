/* Goals:

- filtering
- sorting
- changing UI the views
*/

import React, { useEffect, useContext, useReducer } from "react";
import { filterReducer } from "./../reducer";
import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT_BY,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions/actions";
import { useProductsContext } from "./../context";

//-----------------------------------------------------------

const initialState = {
  allProducts: [],
  filteredProducts: [],
  isGridViewLayout: true,
  sortBy: "price-lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    rangeMinPrice: 0,
    rangeMaxPrice: 0,
    rangeSelectedPrice: 0,
    freeShipping: false,
  },
};

const FilterContext = React.createContext();

export default function FilterContextProvider({ children }) {
  const { products } = useProductsContext();

  const [filterState, dispatchFilter] = useReducer(filterReducer, initialState);

  const changeViewLayoutToGrid = () => {
    dispatchFilter({ type: SET_GRID_VIEW });
  };

  const changeViewLayoutToList = () => {
    dispatchFilter({ type: SET_LIST_VIEW });
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    dispatchFilter({ type: UPDATE_SORT_BY, payload: value });
  };

  const handleFiltersChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === "category") {
      value = event.target.textContent;
    }

    if (name === "color") {
      value = event.target.dataset.color;
    }

    if (name === "price") {
      value = event.target.valueAsNumber;
    }
    console.log(name, value);
    dispatchFilter({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearAllFilters = () => {
    dispatchFilter({ type: CLEAR_FILTERS });
  };

  useEffect(() => {
    dispatchFilter({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatchFilter({ type: FILTER_PRODUCTS });
    dispatchFilter({ type: SORT_PRODUCTS });
  }, [products, filterState.sortBy, filterState.filters]);

  return (
    <FilterContext.Provider
      value={{
        ...filterState,
        changeViewLayoutToGrid,
        changeViewLayoutToList,
        handleSortChange,
        handleFiltersChange,
        clearAllFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};

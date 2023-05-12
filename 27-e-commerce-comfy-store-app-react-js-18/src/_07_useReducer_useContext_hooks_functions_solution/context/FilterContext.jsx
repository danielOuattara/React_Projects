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
  allProducts: [],
  filteredProducts: [],
  isGridViewLayout: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    freeShipping: false,
  },
};

const FilterContext = React.createContext();

export default function FilterContextProvider({ children }) {
  const { products } = useProductsContext();

  const [filterState, dispatchFilter] = useReducer(filterReducer, initialState);

  useEffect(() => {
    dispatchFilter({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const changeViewLayoutToGrid = () => {
    dispatchFilter({ type: SET_GRIDVIEW });
  };
  const changeViewLayoutToList = () => {
    dispatchFilter({ type: SET_LISTVIEW });
  };

  const handleSortChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    dispatchFilter({ type: UPDATE_SORT, payload: value });
  };

  useEffect(() => {
    dispatchFilter({ type: SORT_PRODUCTS });
  }, [filterState.sort]);

  return (
    <FilterContext.Provider
      value={{
        ...filterState,
        changeViewLayoutToGrid,
        changeViewLayoutToList,
        handleSortChange,
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

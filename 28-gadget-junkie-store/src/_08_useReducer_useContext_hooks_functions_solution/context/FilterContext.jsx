/* Goals:

- filtering
- sorting
- changing UI for products views
*/

import { useEffect, createContext, useContext, useReducer } from "react";
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
    isFreeShipping: false,
  },
};

const FilterContext = createContext();

export default function FilterContextProvider(props) {
  const { products } = useProductsContext();

  const [filterState, dispatchFilter] = useReducer(filterReducer, initialState);

  const changeViewLayoutToGrid = () => dispatchFilter({ type: SET_GRID_VIEW });

  const changeViewLayoutToList = () => dispatchFilter({ type: SET_LIST_VIEW });

  const handleSortChange = (event) =>
    dispatchFilter({ type: UPDATE_SORT_BY, payload: event.target.value });

  const handleFiltersChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "category") {
      value = event.target.textContent;
    }
    if (name === "color") {
      value = event.target.dataset.color;
    }
    if (name === "price") {
      name = "rangeSelectedPrice";
      value = event.target.valueAsNumber;
    }
    if (name === "isFreeShipping") {
      value = event.target.checked;
    }
    dispatchFilter({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearAllFilters = () =>
    dispatchFilter({ type: CLEAR_FILTERS, payload: products });

  useEffect(() => {
    dispatchFilter({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatchFilter({ type: FILTER_PRODUCTS });
    dispatchFilter({ type: SORT_PRODUCTS });
  }, [filterState.sortBy, filterState.filters]);

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
      {props.children}
    </FilterContext.Provider>
  );
}

// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};

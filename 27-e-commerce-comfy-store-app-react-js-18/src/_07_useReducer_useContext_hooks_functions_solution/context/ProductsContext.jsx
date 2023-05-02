import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { productsReducer } from "./../reducer";
import { products_url as url } from "./../utilities/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  /*   TOGGLE_SIDEBAR, */
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions/actions";

const initialProductsState = {};

const ProductsContext = React.createContext();

export default function ProductsContextProvider({ children }) {
  const [productsState, dispatchProducts] = useReducer(
    productsReducer,
    initialProductsState,
  );

  // const toggleSideBar = () => {
  //   dispatchProducts({ type: TOGGLE_SIDEBAR });
  // };

  return (
    <ProductsContext.Provider
      value={
        {
          /* toggleSideBar, isSideBarOpen: productsState.isSideBarOpen */
        }
      }
    >
      {children}
    </ProductsContext.Provider>
  );
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

import axios from "axios";
import { useContext, useEffect, useReducer, createContext } from "react";
import { productsReducer } from "./../reducer";
import { products_url } from "./../../utilities/";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions/actions";

const initialProductsState = {
  isProductsLoading: false,
  isProductsError: false,
  products: [],
  featuredProducts: [],
  isSingleProductLoading: false,
  isSingleProductError: false,
  singleProduct: {},
};

const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
  const [productsState, dispatchProducts] = useReducer(
    productsReducer,
    initialProductsState,
  );

  //----------------------------------------
  useEffect(() => {
    async function fetchProducts(url) {
      try {
        dispatchProducts({ type: GET_PRODUCTS_BEGIN });
        const response = await axios.get(url);
        const products = response.data;
        dispatchProducts({
          type: GET_PRODUCTS_SUCCESS,
          payload: products,
        });
      } catch (error) {
        console.log("ERROR = ", error.response);
        dispatchProducts({ type: GET_PRODUCTS_ERROR });
      }
    }

    fetchProducts(products_url);
  }, []);

  //----------------------------------------
  const fetchSingleProduct = async (url) => {
    try {
      dispatchProducts({ type: GET_SINGLE_PRODUCT_BEGIN });
      const response = await axios.get(url);
      console.log("response = ", response);
      const singleProduct = response.data;
      dispatchProducts({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: singleProduct,
      });
    } catch (error) {
      console.log("ERROR = ", error.response);
      dispatchProducts({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  //----------------------------------------

  return (
    <ProductsContext.Provider
      value={{
        ...productsState,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

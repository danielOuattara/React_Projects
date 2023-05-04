import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions/actions";

const productsReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BEGIN:
      return {
        ...state,
        isProductsLoading: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        featuredProducts: action.payload.filter((item) => item.featured),
        isProductsLoading: false,
      };

    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isProductsLoading: false,
        isProductsError: true,
      };

    default:
      return state;
  }
  // return state;
  // throw new Error(`No Matching "${action.type}" - action type`);
};

export default productsReducer;

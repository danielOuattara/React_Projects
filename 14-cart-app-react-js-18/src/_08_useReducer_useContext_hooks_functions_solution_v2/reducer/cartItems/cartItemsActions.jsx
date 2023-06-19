const CLEAR_CART = "CLEAR_CART";
const LOAD_CART_ITEMS = "LOAD_CART_ITEMS";
const GET_TOTALS = "GET_TOTALS";
const LOADING = "LOADING";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";

//---------------
const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

//---------------
const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};

//---------------
const updateQuantity = (id, value) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { id, value },
  };
};

//---------------
const getTotals = () => {
  return {
    type: GET_TOTALS,
  };
};

//---------------
const loading = () => {
  return { type: LOADING };
};

const loadCartData = (data) => {
  return {
    type: LOAD_CART_ITEMS,
    payload: data,
  };
};

//---------------

export {
  CLEAR_CART,
  LOAD_CART_ITEMS,
  GET_TOTALS,
  LOADING,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  loading,
  clearCart,
  removeItem,
  updateQuantity,
  getTotals,
  loadCartData,
};

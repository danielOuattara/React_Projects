import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions/actions";

const cartReducer = (state, action) => {
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cartReducer;

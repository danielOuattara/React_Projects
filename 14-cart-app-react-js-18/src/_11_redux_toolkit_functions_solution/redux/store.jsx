import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart-slice";
import modalReducer from "./modal/modal-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/cartReducer";
import { modalReducer } from "./modal/modalReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    cart: cartReducer,
    modal: modalReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;

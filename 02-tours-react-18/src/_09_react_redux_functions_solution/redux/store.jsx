import { createStore, applyMiddleware } from "redux";
import { toursReducer } from "./tours/toursReducer";
import thunk from "redux-thunk";

export default createStore(toursReducer, applyMiddleware(thunk));

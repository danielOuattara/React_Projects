import { createStore, combineReducers } from "redux";
import { reviewsReducer } from "./reviews/reviewsReducer";

export default createStore(combineReducers({ reviews: reviewsReducer }));

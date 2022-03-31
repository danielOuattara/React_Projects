import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "./reducer";

export default createStore(reducer, applyMiddleware(logger, thunk, promise));

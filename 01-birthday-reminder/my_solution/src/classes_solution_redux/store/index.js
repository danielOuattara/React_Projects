import { createStore } from "redux";
import {friendsReducer } from "./../reducer/friendsReducer";


export default createStore(friendsReducer);

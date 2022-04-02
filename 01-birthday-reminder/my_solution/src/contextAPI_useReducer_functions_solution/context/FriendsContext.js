import React, { createContext, useReducer } from "react";
import data from "../../data";
import { friendsReducer } from "../reducer/friendsReducer";

export const FriendsContext = createContext();

function FriendsContextProvider(props) {
  const initialState = data;

  const [people, dispatch] = useReducer(friendsReducer, initialState);

  return (
    <div>
      <FriendsContext.Provider value={{ people, dispatch }}>
        {props.children}
      </FriendsContext.Provider>
    </div>
  );
}

export default FriendsContextProvider;

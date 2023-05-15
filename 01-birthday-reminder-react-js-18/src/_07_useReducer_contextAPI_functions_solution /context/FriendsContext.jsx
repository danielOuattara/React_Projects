import { createContext, useReducer } from "react";
import data from "../../data";
import { friendsReducer } from "../reducer/friendsReducer";

export const FriendsContext = createContext();

const initialState = data;

function FriendsContextProvider(props) {
  const [friendsState, dispatchFriends] = useReducer(
    friendsReducer,
    initialState,
  );

  return (
    <div>
      <FriendsContext.Provider value={{ friendsState, dispatchFriends }}>
        {props.children}
      </FriendsContext.Provider>
    </div>
  );
}

export default FriendsContextProvider;

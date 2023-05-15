import { useReducer } from "react";
import data from "./../data";
import ListFunctionUseReducer from "./ListFunctionUseReducer";
import { friendsReducer } from "./reducer/friendsReducer";

const initialState = data;

export default function AppFunctionUserReducer() {
  const [friendsState, dispatchFriends] = useReducer(
    friendsReducer,
    initialState,
  );

  const handleRemoveAllFriends = () => {
    return dispatchFriends({ type: "REMOVE_ALL_FRIENDS" });
  };

  const handleRefresh = () => {
    return dispatchFriends({ type: "RESET_ALL_FRIENDS", payload: data });
  };

  return (
    <main>
      <section className="container">
        <span> useReducer solution</span>
        {friendsState.length > 1 && (
          <h3>{friendsState.length} birthdays today</h3>
        )}
        {(friendsState.length === 1 || friendsState.length === 0) && (
          <h3>{friendsState.length} birthday today</h3>
        )}
        <ListFunctionUseReducer
          dispatchFriends={dispatchFriends}
          friendsState={friendsState}
        />
        {friendsState.length !== 0 && (
          <button onClick={handleRemoveAllFriends}> Clear all</button>
        )}
        {friendsState.length === 0 && (
          <button onClick={handleRefresh}> Refresh</button>
        )}
      </section>
    </main>
  );
}

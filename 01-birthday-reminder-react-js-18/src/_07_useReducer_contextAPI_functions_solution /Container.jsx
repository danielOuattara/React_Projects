import ListContextAPI from "./ListFunctionContextAPI";
import { FriendsContext } from "./context/FriendsContext";
import data from "./../data";

export default function Container() {
  return (
    <FriendsContext.Consumer>
      {(context) => {
        const { friendsState, dispatchFriends } = context;
        const handleRemoveAllFriends = () => {
          dispatchFriends({ type: "REMOVE_ALL_FRIENDS" });
        };

        const handleRefresh = () => {
          dispatchFriends({ type: "RESET_ALL_FRIENDS", payload: data });
        };
        return (
          <main>
            <section className="container">
              <span> useReducer + context API solution</span>
              {friendsState.length > 1 && (
                <h3>{friendsState.length} birthdays today</h3>
              )}
              {(friendsState.length === 1 || friendsState.length === 0) && (
                <h3>{friendsState.length} birthday today</h3>
              )}
              <ListContextAPI />
              {friendsState.length !== 0 && (
                <button onClick={() => handleRemoveAllFriends()}>
                  {" "}
                  Clear all
                </button>
              )}
              {friendsState.length === 0 && (
                <button onClick={handleRefresh}> Refresh</button>
              )}
            </section>
          </main>
        );
      }}
    </FriendsContext.Consumer>
  );
}

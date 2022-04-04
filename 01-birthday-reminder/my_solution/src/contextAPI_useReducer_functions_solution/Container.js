import React, { useContext } from "react";
import ListContextAPI from "./ListFunctionContextAPI";
import { FriendsContext } from "./context/FriendsContext";

function Container() {
  const { people, dispatch } = useContext(FriendsContext);

  const handleRemoveAllFriends = () => {
    dispatch({ type: "REMOVE_ALL_FRIENDS" });
  };

  const handleRefresh = () => {
    window.location.reload(false);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <span>useReducer</span>
        <ListContextAPI />
        {people.length !== 0 && (
          <button
            onClick={() => handleRemoveAllFriends()}
            style={{ marginTop: "50px" }}
          >
            {" "}
            Clear all
          </button>
        )}
        {people.length === 0 && (
          <button onClick={() => handleRefresh()} style={{ marginTop: "50px" }}>
            {" "}
            Refresh
          </button>
        )}
      </section>
    </main>
  );
}

export default Container;

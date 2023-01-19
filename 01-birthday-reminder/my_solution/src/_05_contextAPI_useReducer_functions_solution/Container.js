import { useContext } from "react";
import ListContextAPI from "./ListFunctionContextAPI";
import { FriendsContext } from "./context/FriendsContext";
import data from "./../data";

function Container() {
  const { people, dispatch } = useContext(FriendsContext);

  const handleRemoveAllFriends = () => {
    dispatch({ type: "REMOVE_ALL_FRIENDS" });
  };

  const handleRefresh = () => {
    dispatch({ type: "RESET_ALL_FRIENDS", payload: data });
  };

  return (
    <main>
      <section className="container">
        <span> functionnal component + useReducer</span>
        {people.length > 1 && <h3>{people.length} birthdays today</h3>}
        {(people.length === 1 || people.length === 0) && (
          <h3>{people.length} birthday today</h3>
        )}
        <ListContextAPI />
        {people.length !== 0 && (
          <button onClick={() => handleRemoveAllFriends()}> Clear all</button>
        )}
        {people.length === 0 && (
          <button onClick={handleRefresh}> Refresh</button>
        )}
      </section>
    </main>
  );
}

export default Container;

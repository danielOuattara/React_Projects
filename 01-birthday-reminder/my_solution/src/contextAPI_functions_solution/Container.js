import React, { useContext } from "react";
import ListContextAPI from "./ListFunctionContextAPI";
import { FriendsContext} from './context/FriendsContext'

function Container() {
    const { people, handleRefresh, setPeople } = useContext(FriendsContext)
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <span>contextAPI</span>
        <ListContextAPI />
        {people.length !== 0 && (
          <button onClick={() => setPeople([])} style={{ marginTop: "50px" }}>
            {" "}
            Clear all
          </button>
        )}
        {people.length === 0 && (
          <button onClick={handleRefresh} style={{ marginTop: "50px" }}>
            {" "}
            Refresh
          </button>
        )}
      </section>
    </main>
  );
}

export default Container;

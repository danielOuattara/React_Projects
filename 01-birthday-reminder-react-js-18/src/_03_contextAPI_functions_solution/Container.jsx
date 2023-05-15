import ListContextAPI from "./ListFunctionContextAPI";
import { FriendsContext } from "./context/FriendsContext";

export default function Container() {
  return (
    <FriendsContext.Consumer>
      {(context) => {
        const { people, handleRefresh, setPeople } = context;
        return (
          <main>
            <section className="container">
              <span> context API + functions solution</span>
              {people.length > 1 && <h3>{people.length} birthdays today</h3>}
              {(people.length === 1 || people.length === 0) && (
                <h3>{people.length} birthday today</h3>
              )}{" "}
              <ListContextAPI />
              {people.length !== 0 && (
                <button onClick={() => setPeople([])}> Clear all</button>
              )}
              {people.length === 0 && (
                <button onClick={handleRefresh}> Refresh</button>
              )}
            </section>
          </main>
        );
      }}
    </FriendsContext.Consumer>
  );
}

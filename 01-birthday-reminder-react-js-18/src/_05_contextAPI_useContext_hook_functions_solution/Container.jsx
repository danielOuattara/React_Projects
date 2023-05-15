import ListContextAPI from "./ListFunctionContextAPI";
import { useFriendContext } from "./context/FriendsContext";

export default function Container() {
  const { people, handleRefresh, setPeople } = useFriendContext();
  return (
    <main>
      <section className="container">
        <span>context API + useContext hook solutions </span>
        {people.length > 1 && <h3>{people.length} birthdays today</h3>}
        {people.length === 1 && <h3>{people.length} birthday today</h3>}
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

import { Component } from "react";
import ListContextAPI from "./ListContextAPI";
import { FriendsContext } from "./contextClass/FriendsContext";

class ContainerClass extends Component {
  static contextType = FriendsContext;

  render() {
    const { people, handleRefresh, handleRemoveAllPeople } = this.context;
    return (
      <main>
        <section className="container">
          <span> context API + class component</span>
          {people.length > 1 && <h3>{people.length} birthdays today</h3>}
          {(people.length === 1 || people.length === 0) && (
            <h3>{people.length} birthday today</h3>
          )}
          <ListContextAPI />
          {people.length !== 0 && (
            <button onClick={() => handleRemoveAllPeople()}> Clear all</button>
          )}
          {people.length === 0 && (
            <button onClick={handleRefresh}> Refresh</button>
          )}
        </section>
      </main>
    );
  }
}

export default ContainerClass;

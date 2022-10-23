import { useState } from "react";
import data from "./../data";
import List from "./ListFunction";

function AppFunction() {
  const [people, setPeople] = useState(data);

  const handleRemoveOnePerson = (id) => {
    setPeople(() => {
      // can handle Async behaviour !
      let newPeople = people.filter((person) => person.id !== id);
      return newPeople;
    });
  };

  const handleEmpty = () => {
    setPeople(() => []);
  };

  const handleRefresh = () => {
    setPeople(() => data);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>{" "}
        <span>functionnal component</span>
        <List people={people} handleRemoveOnePerson={handleRemoveOnePerson} />
        {people.length !== 0 && (
          <button onClick={handleEmpty} style={localStyle}>
            {" "}
            clear all
          </button>
        )}
        {people.length === 0 && (
          <button onClick={handleRefresh} style={localStyle}>
            {" "}
            Refresh
          </button>
        )}
      </section>
    </main>
  );
}

export default AppFunction;

const localStyle = {
  marginTop: "50px",
};

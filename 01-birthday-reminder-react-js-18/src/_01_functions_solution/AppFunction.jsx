import { useState } from "react";
import data from "../data";
import List from "./ListFunction";

function AppFunction() {
  const [people, setPeople] = useState(data);

  // can handle Async behavior !
  const handleRemoveOnePerson = (id) => {
    return setPeople(() => {
      return people.filter((person) => person.id !== id);
    });
  };

  const handleEmpty = () => setPeople(() => []);

  const handleRefresh = () => setPeople(() => data);

  return (
    <main>
      <section className="container">
        <span>functions solution</span>
        {people.length > 1 && <h3>{people.length} birthdays today</h3>}
        {(people.length === 1 || people.length === 0) && (
          <h3>{people.length} birthday today</h3>
        )}
        <List people={people} handleRemoveOnePerson={handleRemoveOnePerson} />
        {people.length !== 0 && (
          <button onClick={handleEmpty}> clear all</button>
        )}
        {people.length === 0 && (
          <button onClick={handleRefresh}> Refresh</button>
        )}
      </section>
    </main>
  );
}

export default AppFunction;

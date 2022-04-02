import React, { useState } from 'react';
import data from '../data';
import List from './ListFunction';


function App() {
  const [people, setPeople] = useState(data); 

  const handleRemoveOnePerson = (id) => { 
    setPeople( () => {  // handles Async behaviour !
      let newPeople = people.filter(person => person.id !== id );
      return newPeople;
    });
  }

  const handleRefresh = () => {
    window.location.reload(false);
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List 
          people={people} 
          handleRemoveOnePerson={handleRemoveOnePerson}
        />
        { people.length !== 0 && 
          <button onClick={ () =>setPeople([])} style={{marginTop: "50px"}} > Clear all</button>
        }
        { people.length === 0 && 
          <button onClick={handleRefresh} style={{marginTop: "50px"}} > Refresh</button>
        }
      </section>
    </main>
  );
}

export default App;

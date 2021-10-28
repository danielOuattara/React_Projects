import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {

  const [people, setPeople] = useState(data); 
  
  const handleRemoveOnePerson = (id) => {
    let newPeople = people.filter(person => person.id !== id );
    setPeople(newPeople);
    console.log(newPeople)
  }

  const handleRefresh = () => {
    window.location.reload(false);
    // setPeople({})

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

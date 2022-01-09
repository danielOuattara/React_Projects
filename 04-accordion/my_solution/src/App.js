import React from 'react';
import data from './data';
import SingleQuestion from './Question';


function App() {
  return (
    <div className="container">
      <h3>question and answer about login</h3>
      <section className='info'>
        <ul>
          {data.map(item => {
            const { id, title, info } = item;
            return (
              <li key={id}>
                <SingleQuestion title={title} info={info} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [ loading, setLoading ] = useState(true);
  const [ tours, setTours ] = useState([]);

  const fetchTours = async () => {
    try {
      const res = await fetch(url);
      if(!res.ok) {
        throw Error(`${res.status} ${res.statusText}`)
      }
      const data = await res.json();
      setTours(data);
      setLoading(false);

    } catch (err) {
      setLoading(false);
    }
  }

  const removeTourItem = (id) => {
    setTours((tours) => {
      return tours.filter(item => item.id !== id);
    });
  }

  useEffect(() => {
    fetchTours()
  }, []);

  if(loading) {
    return ( 
      <main>
        <Loading />
      </main>
    ); 
  }

  if(tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tour left</h2>
          <button className='btn' onClick={() =>fetchTours()} >refresh</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours 
        tours={tours} 
        removeTourItem={removeTourItem}
      />
    </main>
  );
}

export default App;

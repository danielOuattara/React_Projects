import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [ loading, setLoading ] = useState(true);
  const [ isError, setIsError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState("")
  const [ tours, setTours ] = useState([]);

  const fetchTours = async () => {
  // async function fetchTours() {
    try {
      const res = await fetch(url);
      console.log(res)
      if(!res.ok) {
        setIsError(true);
        setLoading(false);
        setErrorMessage(`${res.status} ${res.statusText}`)
        throw Error(`${res.status} ${res.statusText}`)
      }
      const data = await res.json();
      console.log(data)
      setTours(data);
      setLoading(false);
      setLoading(false);
      setErrorMessage("");

    } catch (err) {
      setLoading(false);
      setIsError(true);
      return err;
    }
  }

  const removeTourItem = (id) => {
    setTours((tours) => {
      return tours.filter(item => item.id !== id);
    });
  }
  
  useEffect(() => { fetchTours() }, []);
  if(isError) {
    return (
      <main>
        <div className='title'>
          <h2>{errorMessage}</h2>
        </div>
      </main>
    );
  }

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

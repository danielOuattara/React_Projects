import React, { useState, useEffect } from 'react'
import LoadingFunction from './LoadingFunction'
import ToursFunction from './ToursFunction'

const url = 'https://course-api.com/react-tours-project';

function AppFunction() {
  const [ loading, setLoading ] = useState(true);
  const [ isError, setIsError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState("")
  const [ tours, setTours ] = useState([]);

  const fetchTours = async () => {
  // async function fetchTours() {
    try {
      const res = await fetch(url);
      if(!res.ok) {
        setIsError(true);
        setLoading(false);
        setErrorMessage(`${res.status} ${res.statusText}`)
        throw Error(`${res.status} ${res.statusText}`)
      }
      const data = await res.json();
      setTours(data);
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
        <LoadingFunction />
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
      <ToursFunction 
        tours={tours} 
        removeTourItem={removeTourItem}
      />
    </main>
  );
}

export default AppFunction;

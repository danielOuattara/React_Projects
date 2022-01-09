import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

function App() {
  const url = 'https://course-api.com/react-tabs-project';

  const [jobs, setJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchJobs = async () => {
    try {
      const res = await fetch(url);
      console.log(res)
      if (!res.ok) {
        throw new Error(res.status + " " +  res.statusText);
      }
      const jobs = await res.json();
      setIsError(false);
      setIsLoading(false);
      setJobs(jobs);

    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error)
    }
  }

  useEffect(() => { fetchJobs() }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  };

  if (isError) {
    return <div>{error}</div>;
  };


  return (
    <h2>tabs project setup</h2>
  ); 
}

export default App;

import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

function App() {
  const url = 'https://course-api.com/react-tabs-project';

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.status + " " +  res.statusText);
      }
      const jobsFetched = await res.json();
      setJobs(jobsFetched);
      setIsLoading(false);

    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error.message);
    }
  }

  useEffect(() => { fetchJobs() }, []);

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>;
      </section>
    ); 
  }

  if (isError) {
    return (
      <section className="section loading">
        <h1>{error}</h1>;
      </section>
    ); 
  }

  const { title, dates, duties, company } = jobs[value];
  
  return (
    <div>
      <section className="section">
        <div className='title'>
          <h2>experience</h2>
          <div className="underline"></div>
        </div>

        <div className="jobs-center">
          {/* job button */}
          <div className="btn-container">
            {jobs.map((job, index) => {
              const { id } = job;
              return (
                <button className={`job-btn ${index === value && 'active-btn'}`} key={id} onClick={() => setValue(index)}>{job.company}</button>
                );
              })}
          </div>

            {/* job details */}
            <article className='job-info'>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className='job-desc'>
                    <FaAngleDoubleRight className='job-icon'/>
                    <p>{duty}</p>
                    </div>
                );
              })} 
            </article>
        </div>
      </section>
    </div>
  ); 
}

export default App;

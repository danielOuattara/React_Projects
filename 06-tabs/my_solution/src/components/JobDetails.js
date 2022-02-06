import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';


export default function JobDetails({ jobs, value }) {
    const { title, dates, duties, company } = jobs[value]
    return (
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
    );

    
}
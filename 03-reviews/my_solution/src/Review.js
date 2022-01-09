import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [ index, setIndex ] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (index) => {
    if(index > people.length - 1) {
      return 0;
    } else if(index < 0) {
      return people.length-1;      
    } else {
      return index;
    }
  }

  const getNextQuote = () => {
    setIndex( index => {
      return checkIndex(index + 1);
    });
  }

  const getPreviousQuote = () => {
    setIndex(index => {
      return checkIndex(index - 1);
    });
  }

  const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * people.length);

    if(randomIndex === index) {
      randomIndex = checkIndex(randomIndex - 1)
      return setIndex(() => {
        return randomIndex;
      });
    
    } else {
       setIndex(() => {
      return randomIndex;
    })};
  }
      
  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'> <FaQuoteRight/></span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className='prev-btn' onClick={() => getPreviousQuote()}> 
          <FaChevronLeft/> 
        </button>
        <button className='next-btn' onClick={() =>getNextQuote()}> 
          <FaChevronRight/> 
        </button>
      </div>
      <div className="button-container">
        <button className="random-btn" onClick={() =>getRandomQuote()}>
          surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;

import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import people from "./../data";

function App() {
  const [index, setIndex] = useState(0);

  const checkIndex = (index) => {
    const lastIndex = people.length - 1;
    if (index === -1) {
      return setIndex(lastIndex);
    } else if (index === lastIndex + 1) {
      return setIndex(0);
    } else {
      return setIndex(index);
    }
  };

  useEffect(() => {
    checkIndex(index);
  }, [index]);

  // useEffect(() => {
  //   const lastIndex = people.length - 1;
  //   if (index === -1) {
  //     setIndex(lastIndex);
  //   }
  //   if (index === lastIndex + 1) {
  //     setIndex(0);
  //   }
  // }, [index]);

  useEffect(() => {
    let slider = setInterval(() => checkIndex(index + 1), 3000);
    return () => clearTimeout(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          let position = "nextSlide";
          console.log("index = ", index);
          console.log("personIndex = ", personIndex);
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            index === personIndex + 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={person.id}>
              <img
                src={person.image}
                alt={person.name}
                className="person-img"
              />
              <h4>{person.name}</h4>
              <p className="title">{person.title}</p>
              <p className="text">{person.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}
export default App;

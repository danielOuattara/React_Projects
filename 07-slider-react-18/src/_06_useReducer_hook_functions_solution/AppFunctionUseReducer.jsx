import { useReducer, useEffect } from "react";
import { slidersReducer } from "./reducer/slider/sliderReducers";
import {
  handleCheckIndex,
  handleUpdateIndex,
} from "./reducer/slider/slidersAction";
import data from "./../data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const initialSlidersState = {
  index: 0,
  people: [...data],
};

export default function AppFunctionUseReducer() {
  const [slidersState, dispatchSliders] = useReducer(
    slidersReducer,
    initialSlidersState,
  );

  const { index, people } = slidersState;

  useEffect(() => {
    dispatchSliders(handleCheckIndex(index));
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      dispatchSliders(handleCheckIndex(index + 1));
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <p>useReducer hook functions solution</p>
        <h2>
          <span>/</span> reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, personIndex) => {
          let position = "nextSlide";
          if (index === personIndex) {
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

        <button
          className="prev"
          onClick={() => dispatchSliders(handleUpdateIndex(-1))}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => dispatchSliders(handleUpdateIndex(+1))}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

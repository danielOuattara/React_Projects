import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { useEffect } from "react";
import { sliderActions } from "./../redux/slider/slider-slice";
import { useSelector, useDispatch } from "react-redux";

function Container() {
  const { index, people } = useSelector((state) => state.sliderState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sliderActions.checkIndex(index));
  }, [dispatch, index]);

  useEffect(() => {
    let slider = setInterval(() => {
      dispatch(sliderActions.checkIndex(index + 1));
    }, 3000);

    return () => clearInterval(slider);
  }, [dispatch, index]);

  return (
    <section className="section">
      <div className="title">
        <p>react redux toolkit functions solution</p>
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
          onClick={() => dispatch(sliderActions.updateIndex(-1))}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => dispatch(sliderActions.updateIndex(+1))}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Container;

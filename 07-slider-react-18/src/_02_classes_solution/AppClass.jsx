import { Component } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import people from "./../data";

export default class AppClass extends Component {
  state = {
    index: 0,
  };

  slider = "";

  checkIndex = (indexArg) => {
    if (indexArg === -1) {
      return this.setState((prevState) => ({
        ...prevState,
        index: people.length - 1,
      }));
    } else if (indexArg === people.length) {
      return this.setState((prevState) => ({ ...prevState, index: 0 }));
    } else {
      return this.setState((prevState) => ({ ...prevState, index: indexArg }));
    }
  };

  componentDidMount() {
    this.slider = setInterval(() => {
      this.setState((prevState) => ({
        ...prevState,
        index: prevState.index + 1,
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.slider);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      this.checkIndex(this.state.index);
    }
  }

  render() {
    console.log(this.state.index);
    return (
      <section className="section">
        <div className="title">
          <p>class solution</p>
          <h2>
            <span>/</span> reviews
          </h2>
        </div>
        <div className="section-center">
          {people.map((person, personIndex) => {
            let position = "nextSlide";
            if (this.state.index === personIndex) {
              position = "activeSlide";
            }
            if (
              this.state.index === personIndex + 1 ||
              (this.state.index === 0 && personIndex === people.length - 1)
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
            onClick={() =>
              this.setState((prevState) => ({
                ...prevState,
                index: prevState.index - 1,
              }))
            }
          >
            <FiChevronLeft />
          </button>
          <button
            className="next"
            onClick={() =>
              this.setState((prevState) => ({
                ...prevState,
                index: prevState.index + 1,
              }))
            }
          >
            <FiChevronRight />
          </button>
        </div>
      </section>
    );
  }
}

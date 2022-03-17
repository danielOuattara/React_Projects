import React, { Component } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import people from "./../data";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.checkIndex = this.checkIndex.bind(this);
    this.getPreviousReviews = this.getPreviousReviews.bind(this);
    this.getNextReviews = this.getNextReviews.bind(this);
  }

  checkIndex(index) {
    if (index < 0) {
      return people.length - 1;
    } else if (index > people.length - 1) {
      return 0;
    } else {
      return index;
    }
  }

  getPreviousReviews = () => {
    this.setState((prevState) => ({
      index: this.checkIndex(prevState.index - 1),
    }));
  };

  getNextReviews = () => {
    this.setState((prevState) => ({
      index: this.checkIndex(prevState.index + 1),
    }));
  };

  componentDidMount() {
    let slider = setInterval(() => {
      this.setState((prevState) => ({
        index: this.checkIndex(prevState.index + 1),
      }));
    }, 3000);
    return () => {
      clearTimeout(slider);
    };
  }

  render() {
    return (
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span> reviews
          </h2>
        </div>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = "nextSlide";
            if (personIndex === this.state.index) {
              position = "activeSlide";
            }
            if (
              personIndex === this.state.index - 1 ||
              (this.state.index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}

          <button className="prev" onClick={() => this.getPreviousReviews()}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => this.getNextReviews()}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    );
  }
}

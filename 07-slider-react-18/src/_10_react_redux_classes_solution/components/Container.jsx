import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { Component } from "react";
import { connect } from "react-redux";
import { checkIndex, updateIndex } from "../redux/slider/slidersAction";

class Container extends Component {
  slider = "";

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.index !== this.props.index) {
      this.props.handleCheckIndex(this.props.index);
    }
  }

  componentDidMount() {
    this.slider = setInterval(() => {
      this.props.handleCheckIndex(this.props.index + 1);
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.slider);
  }

  render() {
    const { index, people } = this.props;
    return (
      <section className="section">
        <div className="title">
          <p>react redux classes solution</p>
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
            onClick={() => this.props.handleUpdateIndex(-1)}
          >
            <FiChevronLeft />
          </button>
          <button
            className="next"
            onClick={() => this.props.handleUpdateIndex(+1)}
          >
            <FiChevronRight />
          </button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    index: state.sliderState.index,
    people: state.sliderState.people,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCheckIndex: (indexArg) => {
      dispatch(checkIndex(indexArg));
    },

    handleUpdateIndex: (value) => {
      dispatch(updateIndex(value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);

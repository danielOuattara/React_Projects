import { Component, createContext } from "react";
import people from "./../../data";

export const ReviewsContext = createContext();

const checkIndex = (argIndex) => {
  if (argIndex > people.length - 1) {
    return 0;
  } else if (argIndex < 0) {
    return people.length - 1;
  } else {
    return argIndex;
  }
};

export default class ReviewsContextProvider extends Component {
  state = {
    index: 0,
  };

  getPreviousQuote = () => {
    return this.setState((prevState) => ({
      ...prevState,
      index: checkIndex(this.state.index - 1),
    }));
  };
  getNextQuote = () => {
    return this.setState((prevState) => ({
      ...prevState,
      index: checkIndex(this.state.index + 1),
    }));
  };

  getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === this.state.index) {
      randomIndex = checkIndex(randomIndex - 1);
    } else {
      return this.setState((prevState) => ({
        ...prevState,
        index: randomIndex,
      }));
    }
  };

  render() {
    return (
      <ReviewsContext.Provider
        value={{
          people,
          index: this.state.index,
          getPreviousQuote: this.getPreviousQuote,
          getNextQuote: this.getNextQuote,
          getRandomQuote: this.getRandomQuote,
        }}
      >
        {this.props.children}
      </ReviewsContext.Provider>
    );
  }
}

/*
version 2 of this ReviewsContextProvider: 
   --> send only "index", "setIndex", people to consuming components,
       so they build required by themselves (better for performances)
   
   
*/

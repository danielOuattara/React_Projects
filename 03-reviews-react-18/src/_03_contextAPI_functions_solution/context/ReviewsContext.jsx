import { createContext, useState } from "react";
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

export default function ReviewsContextProvider(props) {
  const [index, setIndex] = useState(0);

  const getPreviousQuote = () => {
    return setIndex((index) => checkIndex(index - 1));
  };

  const getNextQuote = () => {
    return setIndex((index) => checkIndex(index + 1));
  };

  const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = checkIndex(randomIndex - 1);
    }
    return setIndex(() => randomIndex);
  };
  return (
    <ReviewsContext.Provider
      value={{ people, index, getPreviousQuote, getNextQuote, getRandomQuote }}
    >
      {props.children}
    </ReviewsContext.Provider>
  );
}

/*
version 2 of this ReviewsContextProvider: 
   --> send only "index", "setIndex", people to consuming components,
       so they build required by themselves (better for performances)
   
   
*/

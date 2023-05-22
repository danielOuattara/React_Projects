import {
  GET_PREVIOUS_QUOTE,
  GET_NEXT_QUOTE,
  GET_RANDOM_QUOTE,
} from "./reviewsAction";
import people from "./../../../data";

const checkIndex = (argIndex) => {
  if (argIndex > people.length - 1) {
    return 0;
  } else if (argIndex < 0) {
    return people.length - 1;
  } else {
    return argIndex;
  }
};

export const reviewsReducer = (state, action) => {
  switch (action.type) {
    case GET_PREVIOUS_QUOTE:
      return {
        ...state,
        index: checkIndex(state.index - 1),
      };

    case GET_NEXT_QUOTE:
      return {
        ...state,
        index: checkIndex(state.index + 1),
      };

    case GET_RANDOM_QUOTE:
      let randomIndex = Math.floor(Math.random() * people.length);
      if (randomIndex === state.index) {
        randomIndex = checkIndex(randomIndex - 1);
      }
      return {
        ...state,
        index: checkIndex(randomIndex),
      };

    default:
      return state;
  }
};

/* 

    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = checkIndex(randomIndex - 1);
    }
    return setIndex(() => randomIndex);


*/

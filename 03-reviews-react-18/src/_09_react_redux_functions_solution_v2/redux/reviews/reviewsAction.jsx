const GET_PREVIOUS_QUOTE = "GET_PREVIOUS_QUOTE";
const GET_NEXT_QUOTE = "GET_NEXT_QUOTE";
const GET_RANDOM_QUOTE = "GET_RANDOM_QUOTE";

const getPreviousQuote = () => ({ type: GET_PREVIOUS_QUOTE });
const getNextQuote = () => ({ type: GET_NEXT_QUOTE });
const getRandomQuote = () => ({ type: GET_RANDOM_QUOTE });

export {
  GET_PREVIOUS_QUOTE,
  GET_NEXT_QUOTE,
  GET_RANDOM_QUOTE,
  getPreviousQuote,
  getNextQuote,
  getRandomQuote,
};

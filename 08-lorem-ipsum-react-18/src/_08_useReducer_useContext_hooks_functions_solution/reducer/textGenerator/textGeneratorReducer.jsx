import {
  HANDLE_NUMBER_OF_PARAGRAPH,
  HANDLE_GENERATE_TEXT,
} from "./textGeneratorActions";

export const textGeneratorReducer = (state, action) => {
  switch (action.type) {
    case HANDLE_NUMBER_OF_PARAGRAPH:
      return {
        ...state,
        numberOfParagraph: action.payload,
      };

    case HANDLE_GENERATE_TEXT:
      return {
        ...state,
        text: state.data.slice(0, parseInt(state.numberOfParagraph)),
      };

    default:
      return state;
  }
};

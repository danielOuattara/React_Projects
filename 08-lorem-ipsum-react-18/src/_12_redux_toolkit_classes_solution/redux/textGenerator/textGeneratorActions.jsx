const HANDLE_NUMBER_OF_PARAGRAPH = "HANDLE_NUMBER_OF_PARAGRAPH";
const HANDLE_GENERATE_TEXT = "HANDLE_GENERATE_TEXT";

const setNumberOfParagraph = (value) => {
  return {
    type: HANDLE_NUMBER_OF_PARAGRAPH,
    payload: value,
  };
};

const handleGenerateText = () => {
  return {
    type: HANDLE_GENERATE_TEXT,
  };
};

export {
  HANDLE_NUMBER_OF_PARAGRAPH,
  setNumberOfParagraph,
  HANDLE_GENERATE_TEXT,
  handleGenerateText,
};

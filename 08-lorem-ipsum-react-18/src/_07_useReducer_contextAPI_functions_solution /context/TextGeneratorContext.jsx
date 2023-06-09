import { createContext, useReducer } from "react";
import data from "./../../data";
import { textGeneratorReducer } from "./../reducer/textGenerator/textGeneratorReducer";
import {
  handleNumberOfParagraph,
  handleGenerateText,
} from "./../reducer/textGenerator/textGeneratorActions";

//-------------------------------------------------------------

export const TextGeneratorContext = createContext();

const initialTextGenState = {
  numberOfParagraph: "1",
  text: [],
  data: [...data],
};

export default function TextGeneratorContextProvider(props) {
  const [textGeneratorState, dispatchTextGenerator] = useReducer(
    textGeneratorReducer,
    initialTextGenState,
  );

  const setNumberOfParagraph = (value) => {
    dispatchTextGenerator(handleNumberOfParagraph(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchTextGenerator(handleGenerateText());
  };

  return (
    <TextGeneratorContext.Provider
      value={{
        ...textGeneratorState,
        setNumberOfParagraph,
        handleSubmit,
        data,
      }}
    >
      {props.children}
    </TextGeneratorContext.Provider>
  );
}

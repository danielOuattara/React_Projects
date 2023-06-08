import { createContext, useContext, useState } from "react";
import data from "./../../data";

const TextGeneratorContext = createContext();

export default function TextGeneratorContextProvider(props) {
  const [numberOfParagraph, setNumberOfParagraph] = useState("1");
  const [text, setText] = useState([]);

  const handleNumberOfParagraph = (value) => setNumberOfParagraph(() => value);

  const handleTextArray = () => {
    return setText(() => data.slice(0, parseInt(numberOfParagraph)));
  };

  return (
    <TextGeneratorContext.Provider
      value={{
        numberOfParagraph,
        text,
        handleNumberOfParagraph,
        handleTextArray,
        data,
      }}
    >
      {props.children}
    </TextGeneratorContext.Provider>
  );
}

export const useTextGeneratorContext = () => {
  return useContext(TextGeneratorContext);
};

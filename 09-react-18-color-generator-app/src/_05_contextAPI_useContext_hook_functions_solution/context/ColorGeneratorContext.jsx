import { createContext, useState, useContext } from "react";
import Values from "values.js";

const ColorGeneratorContext = createContext();

export default function ColorGeneratorContextProvider(props) {
  const [step, setStep] = useState(10);
  const [userColor, setUserColor] = useState("");
  const [colorInputError, setColorInputError] = useState(false);
  const [list, setList] = useState(new Values("#fbb146").all(Number(step)));

  const context = {
    step,
    setStep,
    userColor,
    setUserColor,
    colorInputError,
    setColorInputError,
    list,
    setList,
  };
  return (
    <ColorGeneratorContext.Provider value={context}>
      {props.children}
    </ColorGeneratorContext.Provider>
  );
}

export const useColorGeneratorContext = () => {
  return useContext(ColorGeneratorContext);
};

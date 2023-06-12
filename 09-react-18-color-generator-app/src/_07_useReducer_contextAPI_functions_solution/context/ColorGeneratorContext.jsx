import { createContext, useReducer } from "react";
import Values from "values.js";
import { colorGeneratorReducer } from "./../reducer/colorGenerator/colorGeneratorReducer";

export const ColorGeneratorContext = createContext();

const initialColoGeneratorState = {
  step: 10,
  userColor: "",
  colorInputError: false,
  list: new Values("#fbb146").all(Number(10)),
};

export default function ColorGeneratorContextProvider(props) {
  const [colorGeneratorState, dispatchColorGenerator] = useReducer(
    colorGeneratorReducer,
    initialColoGeneratorState,
  );
  const context = {
    step: colorGeneratorState.step,
    userColor: colorGeneratorState.userColor,
    colorInputError: colorGeneratorState.colorInputError,
    list: colorGeneratorState.list,
    dispatchColorGenerator: dispatchColorGenerator,
  };
  return (
    <ColorGeneratorContext.Provider value={context}>
      {props.children}
    </ColorGeneratorContext.Provider>
  );
}

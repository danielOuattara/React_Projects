import { useReducer } from "react";
import Values from "values.js";
import { colorGeneratorReducer } from "./reducer/colorGenerator/colorGeneratorReducer";
import { ColorForm, ColorList } from "./components";

const initialColoGeneratorState = {
  step: 10,
  userColor: "",
  colorInputError: false,
  list: new Values("#fbb146").all(Number(10)),
};

export default function AppFunctionUseReducer() {
  const [colorGeneratorState, dispatchColorGenerator] = useReducer(
    colorGeneratorReducer,
    initialColoGeneratorState,
  );
  return (
    <>
      <p className="title">useReducer hook function solution</p>
      <ColorForm
        step={colorGeneratorState.step}
        userColor={colorGeneratorState.userColor}
        colorInputError={colorGeneratorState.colorInputError}
        dispatchColorGenerator={dispatchColorGenerator}
      />
      <ColorList list={colorGeneratorState.list} />
    </>
  );
}

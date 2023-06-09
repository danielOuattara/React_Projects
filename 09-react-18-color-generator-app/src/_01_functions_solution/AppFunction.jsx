import { useState } from "react";
import { ColorForm, ColorList } from "./components";
import Values from "values.js";

function App() {
  const [step, setStep] = useState(10);
  const [userColor, setUserColor] = useState("");
  const [colorInputError, setColorInputError] = useState(false);
  const [list, setList] = useState(new Values("#fbb146").all(Number(step)));

  return (
    <>
      <p className="title">function solution</p>
      <ColorForm
        step={step}
        setStep={setStep}
        userColor={userColor}
        setUserColor={setUserColor}
        colorInputError={colorInputError}
        setColorInputError={setColorInputError}
        setList={setList}
      />

      <ColorList list={list} />
    </>
  );
}

export default App;

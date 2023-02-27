import { useState } from "react";
import SingleColorFunction from "./SingleColorFunction";
import Values from "values.js";

function App() {
  const [step, setStep] = useState(10);
  const [userColor, setUserColor] = useState("");
  const [inputError, setInputError] = useState(false);
  const [list, setList] = useState(new Values("#fbb146").all(step));

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      setList(new Values(userColor).all(step));
    } catch (error) {
      setInputError(true);
      setUserColor("");
    }
  };

  return (
    <>
      {/* component 1 */}
      <section className="container">
        <h3 className={inputError ? "error" : null}> color generator </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={inputError ? "Enter valid Hex color..." : "#fbb146"}
            value={userColor}
            className={inputError ? "error" : null}
            onChange={(event) => setUserColor(event.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
          {inputError && (
            <p className="error">Enter a valid Hexadecimal Color</p>
          )}
        </form>
      </section>

      {/* component 2 */}
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColorFunction
              key={index}
              index={index}
              color={color}
              listLength={list.length}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;

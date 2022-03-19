import React, { useState } from "react";
import SingleColorFunction from "./SingleColorFunction";
import Values from "values.js";


function App() {
  const [userColor, setUserColor] = useState("");
  const [error, setError] = useState(null);
  const [list, setList] = useState(new Values("#fbb").all(10));

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      setError(false);
      setList(new Values(userColor).all(10));
    } catch (error) {
      setError(true);
      setUserColor("");
    }
  };

  return (
    <>
      {/* component 1 */}
      <section className="container">
        <h3> color generator </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter valid Hex color..."
            onChange={(event) => setUserColor(event.target.value)}
            value={userColor}
            className={error ? "error" : null}
          />
          <button type="submit" className="btn">
            Submit
          </button>
          {error && <p className="error">Enter a valid Hexadecimal Color</p>}
        </form>
      </section>

      {/* component 2 */}
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColorFunction key={index} index={index} {...color} />;
        })}
      </section>
    </>
  );
}

export default App;

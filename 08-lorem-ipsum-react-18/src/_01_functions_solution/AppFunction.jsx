import { useState } from "react";
import data from "./../data";

function App() {
  const [numberOfParagraph, setNumberOfParagraph] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    return setText(() => data.slice(0, parseInt(numberOfParagraph)));
  };

  return (
    <section className="section-center">
      <p>function solution</p>
      <h3>tired of boring lorem ipsum ?</h3>

      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="numbParagraph">number of paragraph ?</label>
        <input
          id="numbParagraph"
          type="number"
          min="1"
          max={data.length}
          value={numberOfParagraph}
          onChange={(event) => setNumberOfParagraph(event.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;

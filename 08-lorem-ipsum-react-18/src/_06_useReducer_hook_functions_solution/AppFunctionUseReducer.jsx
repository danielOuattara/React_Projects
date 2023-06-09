import { useReducer } from "react";
import data from "./../data";
import { textGeneratorReducer } from "./reducer/textGenerator/textGeneratorReducer";
import {
  handleNumberOfParagraph,
  handleGenerateText,
} from "./reducer/textGenerator/textGeneratorActions";

const initialTextGenState = {
  numberOfParagraph: "1",
  text: [],
  data: [...data],
};

export default function AppFunctionUseReducer() {
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
    <section className="section-center">
      <p>useReducer hook functions solution</p>
      <h3>tired of boring lorem ipsum ?</h3>

      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="numbParagraph">number of paragraph ?</label>
        <input
          id="numbParagraph"
          type="number"
          min="1"
          max={data.length}
          value={textGeneratorState.numberOfParagraph}
          onChange={(event) => setNumberOfParagraph(event.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {textGeneratorState.text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

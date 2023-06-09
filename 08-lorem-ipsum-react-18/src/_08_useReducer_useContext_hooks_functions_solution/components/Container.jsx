import { useTextGeneratorContext } from "../context/TextGeneratorContext";

export default function Container() {
  const { numberOfParagraph, text, data, setNumberOfParagraph, handleSubmit } =
    useTextGeneratorContext();

  return (
    <section className="section-center">
      <p>useReducer + useContext hooks solution</p>
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

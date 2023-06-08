import { useTextGeneratorContext } from "../context/TextGeneratorContext";

export default function Container() {
  const {
    numberOfParagraph,
    text,
    handleNumberOfParagraph,
    handleTextArray,
    data,
  } = useTextGeneratorContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    return handleTextArray();
  };

  return (
    <section className="section-center">
      <p>context API + useContext hooks solutions</p>
      <h3>tired of boring lorem ipsum ?</h3>

      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="numbParagraph">number of paragraph ?</label>
        <input
          id="numbParagraph"
          type="number"
          min="1"
          max={data.length}
          value={numberOfParagraph}
          onChange={(event) => handleNumberOfParagraph(event.target.value)}
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

import { textGeneratorActions } from "../redux/textGenerator/textGenerator-slice";
import { useSelector, useDispatch } from "react-redux";
//-------------------------------------------------------

export default function Container(props) {
  const { numberOfParagraph, text, data } = useSelector(
    (state) => state.textGeneratorState,
  );
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(textGeneratorActions.handleGenerateText());
  };

  return (
    <section className="section-center">
      <p>react redux toolkit functions solution</p>
      <h3>tired of boring lorem ipsum ?</h3>

      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="numbParagraph">number of paragraph ?</label>
        <input
          id="numbParagraph"
          type="number"
          min="1"
          max={data.length}
          value={numberOfParagraph}
          onChange={(event) =>
            dispatch(
              textGeneratorActions.setNumberOfParagraph(event.target.value),
            )
          }
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

import { connect } from "react-redux";
import {
  handleNumberOfParagraph,
  handleGenerateText,
} from "./../redux/textGenerator/textGeneratorActions";
function Container(props) {
  const { numberOfParagraph, text, data } = props.textGeneratorState;

  return (
    <section className="section-center">
      <p>react redux functions solution</p>
      <h3>tired of boring lorem ipsum ?</h3>

      <form className="lorem-form" onSubmit={props.handleSubmit}>
        <label htmlFor="numbParagraph">number of paragraph ?</label>
        <input
          id="numbParagraph"
          type="number"
          min="1"
          max={data.length}
          value={numberOfParagraph}
          onChange={(event) => props.setNumberOfParagraph(event.target.value)}
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

const mapStateToProps = (state) => {
  return { textGeneratorState: state.textGeneratorState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNumberOfParagraph: (value) => {
      dispatch(handleNumberOfParagraph(value));
    },

    handleSubmit: (event) => {
      event.preventDefault();
      dispatch(handleGenerateText());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);

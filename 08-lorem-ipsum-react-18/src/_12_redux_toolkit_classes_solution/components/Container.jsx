import { Component } from "react";
import { connect } from "react-redux";
import { textGeneratorActions } from "./../redux/textGenerator/textGenerator-slice";

class Container extends Component {
  render() {
    const { numberOfParagraph, text, data } = this.props.textGeneratorState;
    return (
      <section className="section-center">
        <p>react redux toolkit classes solution</p>
        <h3>tired of boring lorem ipsum ?</h3>

        <form className="lorem-form" onSubmit={this.props.handleSubmit}>
          <label htmlFor="numbParagraph">paragraph ?</label>
          <input
            id="numbParagraph"
            type="number"
            min="1"
            max={data.length}
            value={numberOfParagraph}
            onChange={(event) =>
              this.props.setNumberOfParagraph(event.target.value)
            }
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { textGeneratorState: state.textGeneratorState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNumberOfParagraph: (value) => {
      dispatch(textGeneratorActions.setNumberOfParagraph(value));
    },

    handleSubmit: (event) => {
      event.preventDefault();
      dispatch(textGeneratorActions.handleGenerateText());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);

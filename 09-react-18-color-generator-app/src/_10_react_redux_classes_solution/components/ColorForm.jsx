import { Component } from "react";
import Values from "values.js";
import { connect } from "react-redux";
import {
  setColorInputError,
  setStep,
  setList,
  setUserColor,
} from "./../redux/colorGenerator/colorGeneratorActions";

class ColorForm extends Component {
  render() {
    const { step, userColor, colorInputError } = this.props;

    const handleUserColorChange = (value) => {
      if (userColor) {
        this.props.dispatch(setColorInputError(false));
      }
      this.props.dispatch(setUserColor(value));
    };

    const handleStepValue = (value) => {
      this.props.dispatch(setStep(value));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      this.props.dispatch(setColorInputError(false));
      try {
        this.props.dispatch(setList(new Values(userColor).all(Number(step))));
      } catch (error) {
        this.props.dispatch(setColorInputError(true));
        this.props.dispatch(setUserColor(""));
      }
    };

    return (
      <section className="container">
        <h3 className={colorInputError ? "error" : null}>color generator</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="color" className="label-color">
            Color :
            <input
              name="color"
              id="color"
              type="text"
              placeholder={
                colorInputError ? "Enter valid Hex color..." : "#fbb146"
              }
              value={userColor}
              className={colorInputError ? "error" : null}
              onChange={(event) => handleUserColorChange(event.target.value)}
            />
          </label>

          <label htmlFor="step" className="label-step">
            Step :
            <input
              name="step"
              id="step"
              type="number"
              min="1"
              value={step}
              onChange={(event) => handleStepValue(event.target.value)}
            />
          </label>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.colorGeneratorState.step,
    userColor: state.colorGeneratorState.userColor,
    colorInputError: state.colorGeneratorState.colorInputError,
  };
};

export default connect(mapStateToProps, null)(ColorForm);

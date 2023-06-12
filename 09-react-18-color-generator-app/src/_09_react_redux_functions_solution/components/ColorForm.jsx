import Values from "values.js";
import { connect } from "react-redux";
import {
  setColorInputError,
  setStep,
  setList,
  setUserColor,
} from "./../redux/colorGenerator/colorGeneratorActions";

function ColorForm(props) {
  const { step, userColor, colorInputError, dispatch } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setColorInputError(false));
    try {
      dispatch(setList(new Values(userColor).all(Number(step))));
    } catch (error) {
      dispatch(setColorInputError(true));
      dispatch(setUserColor(""));
    }
  };

  const handleUserColorChange = (value) => {
    if (userColor) {
      dispatch(setColorInputError(false));
    }
    dispatch(setUserColor(value));
  };

  return (
    <section className="container">
      <h3 className={colorInputError ? "error" : null}> color generator </h3>
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
            onChange={(event) => props.dispatch(setStep(event.target.value))}
          />
        </label>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    step: state.colorGeneratorState.step,
    userColor: state.colorGeneratorState.userColor,
    colorInputError: state.colorGeneratorState.colorInputError,
  };
};

export default connect(mapStateToProps, null)(ColorForm);

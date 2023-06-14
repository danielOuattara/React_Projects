import Values from "values.js";
import { colorGeneratorActions } from "./../redux/colorGenerator/colorGenerator-slice";
import { useSelector, useDispatch } from "react-redux";

export default function ColorForm() {
  const dispatch = useDispatch();
  const { step, userColor, colorInputError } = useSelector(
    (state) => state.colorGeneratorState,
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(colorGeneratorActions.setColorInputError(false));
    try {
      const list = new Values(userColor).all(Number(step));
      const newList = list.map((item) => ({ ...item }));
      dispatch(colorGeneratorActions.setList(newList));
    } catch (error) {
      dispatch(colorGeneratorActions.setColorInputError(true));
      dispatch(colorGeneratorActions.setUserColor(""));
    }
  };

  const handleUserColorChange = (value) => {
    if (userColor) {
      dispatch(colorGeneratorActions.setColorInputError(false));
    }
    dispatch(colorGeneratorActions.setUserColor(value));
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
            onChange={(event) =>
              dispatch(
                colorGeneratorActions.setStep(Number(event.target.value)),
              )
            }
          />
        </label>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
}

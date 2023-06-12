import Values from "values.js";
import {
  setColorInputError,
  setStep,
  setList,
  setUserColor,
} from "./../reducer/colorGenerator/colorGeneratorActions";
import { ColorGeneratorContext } from "../context/ColorGeneratorContext";

export default function ColorForm() {
  return (
    <ColorGeneratorContext.Consumer>
      {(context) => {
        const { step, userColor, colorInputError, dispatchColorGenerator } =
          context;

        const handleUserColorChange = (value) => {
          if (userColor) {
            dispatchColorGenerator(setColorInputError(false));
          }
          dispatchColorGenerator(setUserColor(value));
        };

        const handleSubmit = (event) => {
          event.preventDefault();
          dispatchColorGenerator(setColorInputError(false));
          try {
            dispatchColorGenerator(
              setList(new Values(userColor).all(Number(step))),
            );
          } catch (error) {
            dispatchColorGenerator(setColorInputError(true));
            dispatchColorGenerator(setUserColor(""));
          }
        };
        return (
          <section className="container">
            <h3 className={colorInputError ? "error" : null}>
              {" "}
              color generator{" "}
            </h3>
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
                  onChange={(event) =>
                    handleUserColorChange(event.target.value)
                  }
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
                    dispatchColorGenerator(setStep(event.target.value))
                  }
                />
              </label>

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </section>
        );
      }}
    </ColorGeneratorContext.Consumer>
  );
}

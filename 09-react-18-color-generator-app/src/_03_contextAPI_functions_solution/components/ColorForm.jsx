import Values from "values.js";
import { ColorGeneratorContext } from "../context/ColorGeneratorContext";

export default function ColorForm(props) {
  return (
    <ColorGeneratorContext.Consumer>
      {(context) => {
        const {
          step,
          setStep,
          setList,
          userColor,
          setUserColor,
          colorInputError,
          setColorInputError,
        } = context;

        const handleUserColorChange = (event) => {
          if (userColor) {
            setColorInputError(false);
          }
          setUserColor(event.target.value);
        };

        const handleSubmit = (event) => {
          event.preventDefault();
          setColorInputError(false);
          try {
            setList(new Values(userColor).all(Number(step)));
          } catch (error) {
            setColorInputError(true);
            setUserColor("");
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
                  onChange={(event) => handleUserColorChange(event)}
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
                  onChange={(event) => setStep(event.target.value)}
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

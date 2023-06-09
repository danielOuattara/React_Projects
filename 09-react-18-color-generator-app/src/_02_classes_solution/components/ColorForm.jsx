import { Component } from "react";
import Values from "values.js";

export default class ColorForm extends Component {
  handleUserColorChange = (value) => {
    if (this.props.userColor) {
      this.props.setColorInputError(false);
    }
    this.props.setUserColor(value);
  };

  handleStepValue = (value) => {
    this.props.setStep(value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setColorInputError(false);
    try {
      this.props.setList(
        new Values(this.props.userColor).all(Number(this.props.step)),
      );
    } catch (error) {
      this.props.setColorInputError(true);
      this.props.setUserColor("");
    }
  };
  render() {
    return (
      <section className="container">
        <h3 className={this.props.colorInputError ? "error" : null}>
          color generator
        </h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="color" className="label-color">
            Color :
            <input
              name="color"
              id="color"
              type="text"
              placeholder={
                this.props.colorInputError
                  ? "Enter valid Hex color..."
                  : "#fbb146"
              }
              value={this.props.userColor}
              className={this.props.colorInputError ? "error" : null}
              onChange={(event) =>
                this.handleUserColorChange(event.target.value)
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
              value={this.props.step}
              onChange={(event) => this.handleStepValue(event.target.value)}
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

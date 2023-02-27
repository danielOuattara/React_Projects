import React, { Component } from "react";
import SingleColorClass from "./SingleColorClass";
import Values from "values.js";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userColor: "",
      colorInputError: false,
      list: new Values("#fbb146").all(10),
    };
  }

  handleSubmit = (event) => {
    try {
      event.preventDefault();
      this.setState({
        error: false,
        list: new Values(this.state.userColor).all(10),
      });
    } catch (error) {
      console.log("error ===>> ", error);
      this.setState((prevState) => ({
        ...prevState,
        colorInputError: true,
        userColor: "",
      }));
    }
  };

  render() {
    return (
      <>
        <section className="container">
          <h3 className={this.state.colorInputError ? "error" : null}>
            {" "}
            color generator{" "}
          </h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.userColor}
              placeholder={
                this.state.colorInputError
                  ? "Enter valid Hex color..."
                  : "#fbb146"
              }
              onChange={(event) =>
                this.setState({ userColor: event.target.value })
              }
              className={this.state.colorInputError ? "error" : null}
            />
            <button type="submit" className="btn">
              Submit
            </button>
            {this.state.colorInputError && (
              <p className="error">Enter a valid Hexadecimal Color</p>
            )}
          </form>
        </section>

        <section className="colors">
          {this.state.list.map((color, index) => {
            return <SingleColorClass key={index} index={index} {...color} />;
          })}
        </section>
      </>
    );
  }
}

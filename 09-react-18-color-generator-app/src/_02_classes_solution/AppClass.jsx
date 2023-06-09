import React, { Component } from "react";
import { ColorForm, ColorList } from "./components";
import Values from "values.js";

export default class AppClass extends Component {
  state = {
    step: 10,
    userColor: "",
    colorInputError: false,
    list: new Values("#fbb146").all(Number(this.step)),
  };

  setStep = (value) => {
    return this.setState({ step: value });
  };

  setUserColor = (value) => {
    return this.setState({ userColor: value });
  };

  setColorInputError = (value) => {
    return this.setState({ colorInputError: value });
  };

  setList = (value) => {
    return this.setState({ list: value });
  };

  render() {
    return (
      <>
        <p className="title">classes solution</p>
        {/* component 1 */}
        <ColorForm
          step={this.state.step}
          setStep={this.setStep}
          userColor={this.state.userColor}
          setUserColor={this.setUserColor}
          colorInputError={this.state.colorInputError}
          setColorInputError={this.setColorInputError}
          setList={this.setList}
        />

        <ColorList list={this.state.list} />
      </>
    );
  }
}

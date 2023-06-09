import { Component, createContext } from "react";
import Values from "values.js";

export const ColorGeneratorContext = createContext();

export default class ColorGeneratorContextProvider extends Component {
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
    const context = {
      step: this.state.step,
      setStep: this.setStep,
      userColor: this.state.userColor,
      setUserColor: this.setUserColor,
      colorInputError: this.state.colorInputError,
      setColorInputError: this.setColorInputError,
      setList: this.setList,
      list: this.state.list,
    };

    return (
      <ColorGeneratorContext.Provider value={context}>
        {this.props.children}
      </ColorGeneratorContext.Provider>
    );
  }
}

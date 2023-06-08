import { Component } from "react";
import { createContext } from "react";
import data from "./../../data";

export const TextGeneratorContext = createContext();

export default class TextGeneratorContextProvider extends Component {
  state = {
    numberOfParagraph: "1",
    text: [],
  };

  handleNumberOfParagraph = (value) =>
    this.setState((prevState) => ({ ...prevState, numberOfParagraph: value }));

  handleTextArray = () => {
    return this.setState((prevState) => ({
      ...prevState,
      text: data.slice(0, parseInt(this.state.numberOfParagraph)),
    }));
  };

  render() {
    return (
      <TextGeneratorContext.Provider
        value={{
          numberOfParagraph: this.state.numberOfParagraph,
          text: this.state.text,
          handleNumberOfParagraph: this.handleNumberOfParagraph,
          handleTextArray: this.handleTextArray,
          data,
        }}
      >
        {this.props.children}
      </TextGeneratorContext.Provider>
    );
  }
}

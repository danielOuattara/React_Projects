import { Component } from "react";
import { createContext } from "react";
import people from "./../../data";

export const SlidersContext = createContext();

export default class SlidersContextProvider extends Component {
  state = {
    index: 0,
  };

  checkIndex = (indexArg) => {
    if (indexArg === -1) {
      return this.setState((prevState) => ({
        ...prevState,
        index: people.length - 1,
      }));
    } else if (indexArg === people.length) {
      return this.setState((prevState) => ({ ...prevState, index: 0 }));
    } else {
      return this.setState((prevState) => ({ ...prevState, index: indexArg }));
    }
  };

  handleUpdateIndex = (value) => {
    this.setState((prevState) => ({
      ...prevState,
      index: prevState.index + value,
    }));
  };

  render() {
    return (
      <SlidersContext.Provider
        value={{
          people,
          index: this.state.index,
          checkIndex: this.checkIndex,
          handleUpdateIndex: this.handleUpdateIndex,
        }}
      >
        {this.props.children}
      </SlidersContext.Provider>
    );
  }
}

import SlidersContextProvider, {
  SlidersContext,
} from "./context/SlidersContext";
import Container from "./components/Container";
import React, { Component } from "react";

export default class AppClassContextAPI extends Component {
  render() {
    return (
      <SlidersContextProvider>
        <SlidersContext.Consumer>
          {(context) => {
            return <Container context={context} />;
          }}
        </SlidersContext.Consumer>
      </SlidersContextProvider>
    );
  }
}

import { Component } from "react";
import ColorGeneratorContextProvider from "./context/ColorGeneratorContext";
import { Container } from "./components";

export default class AppClassContextAPI extends Component {
  render() {
    return (
      <ColorGeneratorContextProvider>
        <Container />
      </ColorGeneratorContextProvider>
    );
  }
}

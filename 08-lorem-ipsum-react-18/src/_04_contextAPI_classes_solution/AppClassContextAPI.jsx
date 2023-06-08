import { Component } from "react";
import Container from "./components/Container";
import TextGeneratorContextProvider from "./context/TextGeneratorContext";

export default class AppClassContextAPI extends Component {
  render() {
    return (
      <TextGeneratorContextProvider>
        <Container />
      </TextGeneratorContextProvider>
    );
  }
}

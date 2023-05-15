import { Component } from "react";
import ToursContextProvider from "./context/ToursContext";
import Container from "./components/Container";

export default class AppClass extends Component {
  render() {
    return (
      <ToursContextProvider>
        <Container />
      </ToursContextProvider>
    );
  }
}

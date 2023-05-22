import { Component } from "react";
import Container from "./components/Container";
import ReviewsContextProvider from "./context/ReviewsContext";

export default class AppClass extends Component {
  render() {
    return (
      <ReviewsContextProvider>
        <Container />
      </ReviewsContextProvider>
    );
  }
}

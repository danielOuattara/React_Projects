import { Component } from "react";
import GroceryContextProvider from "./context/GroceryContext";
import { Container } from "./components";

export default class AppClassContextAPI extends Component {
  render() {
    return (
      <GroceryContextProvider>
        <Container />
      </GroceryContextProvider>
    );
  }
}

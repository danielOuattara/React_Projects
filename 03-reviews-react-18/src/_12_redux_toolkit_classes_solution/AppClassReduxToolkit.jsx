import { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Container from "./components/Container";

export default class AppClassReduxToolkit extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

import { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Container } from "./components";

export default class AppClassRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

import { Component } from "react";
import ContainerClassReduxToolkit from "./components/ContainerClassReduxToolkit";
import { Provider } from "react-redux";
import store from "./store";

export default class AppClassReduxToolkit extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContainerClassReduxToolkit />
      </Provider>
    );
  }
}

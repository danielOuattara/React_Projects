import { Component } from "react";
import ContainerClassRedux from "./ContainreClassRedux";
import { Provider } from "react-redux";
import store from "./store";

export default class AppClassRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContainerClassRedux />
      </Provider>
    );
  }
}

import { Component } from "react";
import ContainerClassRedux from "./ContainerClassRedux";
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

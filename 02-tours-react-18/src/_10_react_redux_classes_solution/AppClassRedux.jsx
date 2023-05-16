import { Component } from "react";
import ContainerClassRedux from "./components/ContainerClassRedux";
import { Provider } from "react-redux";
import store from "./redux/store";

export default class AppClassRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContainerClassRedux />
      </Provider>
    );
  }
}

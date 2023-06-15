import { Component } from "react";
import { Modal, Sidebar, Home } from "./components";
import { Provider } from "react-redux";
import store from "./redux/store";

export default class AppClassReduxToolkit extends Component {
  render() {
    return (
      <Provider store={store}>
        <p className="title">redux toolkit classes solution</p>
        <Home />
        <Modal />
        <Sidebar />
      </Provider>
    );
  }
}

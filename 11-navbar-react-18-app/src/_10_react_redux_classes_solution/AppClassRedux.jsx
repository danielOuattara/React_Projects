import { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Navbar } from "./components";

export default class AppClassRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <p className="title"> redux classes solution</p>
        <Navbar />
      </Provider>
    );
  }
}

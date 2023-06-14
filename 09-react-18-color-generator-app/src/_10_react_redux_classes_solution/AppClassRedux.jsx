import { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ColorForm, ColorList } from "./components";

export default class AppClassRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <p className="title">react redux classes solution</p>
        <ColorForm />
        <ColorList />
      </Provider>
    );
  }
}

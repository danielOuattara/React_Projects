import { Component } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { AppContainer } from "./components";

export default class AppClassesReduxToolkit extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

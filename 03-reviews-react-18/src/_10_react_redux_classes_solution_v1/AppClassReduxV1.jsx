/* 
Version 1: action directly in connected components 
*/

import { Component } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import Container from "./components/Container";

export default class AppClassReduxV1 extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

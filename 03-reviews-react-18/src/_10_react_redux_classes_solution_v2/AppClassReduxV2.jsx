/* 
Version 2: action in reviewsAction then dispatch in connected components 
*/

import { Component } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import Container from "./components/Container";

export default class AppClassReduxV2 extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

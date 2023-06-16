import { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Hero, Navbar, Sidebar, Submenu } from "./components";

export default class AppClassRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </Provider>
    );
  }
}

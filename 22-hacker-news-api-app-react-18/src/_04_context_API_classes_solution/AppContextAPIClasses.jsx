import { Component } from "react";
import AppContextProvider from "./context/AppContext";
//---------------------------------------------------

export default class AppContextAPIClasses extends Component {
  render() {
    return (
      <AppContextProvider>
        <p style={{ textAlign: "center" }}> context API classes solution</p>
        <main></main>
      </AppContextProvider>
    );
  }
}

import { Component } from "react";
import AppContextProvider from "./context/AppContext";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
//---------------------------------------------------

export default class AppContextAPIClasses extends Component {
  render() {
    return (
      <AppContextProvider>
        <p style={{ textAlign: "center" }}> context API classes solution</p>
        <main>
          <Navbar />
          <CartContainer />
        </main>
      </AppContextProvider>
    );
  }
}

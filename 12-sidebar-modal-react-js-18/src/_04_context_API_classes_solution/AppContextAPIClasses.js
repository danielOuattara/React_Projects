import { Component } from "react";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import Home from "./components/Home";
import AppContextProvider from "./context/AppContext";

export default class AppContextAPIClasses extends Component {
  render() {
    return (
      <AppContextProvider>
        <p style={{ textAlign: "center" }}> context API classes solution</p>
        <Home />
        <Modal />
        <Sidebar />
      </AppContextProvider>
    );
  }
}

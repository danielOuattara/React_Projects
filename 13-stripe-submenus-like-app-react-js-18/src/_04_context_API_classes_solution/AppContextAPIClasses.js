import { Component } from "react";
import AppContextProvider from "./context/AppContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
//---------------------------------------------------

export default class AppContextAPIClasses extends Component {
  render() {
    return (
      <AppContextProvider>
        <p style={{ textAlign: "center" }}> context API classes solution</p>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </AppContextProvider>
    );
  }
}

import { Component } from "react";
import SubMenuContextProvider from "./context/SubMenuContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
//---------------------------------------------------

export default class AppClassContextAPI extends Component {
  render() {
    return (
      <SubMenuContextProvider>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </SubMenuContextProvider>
    );
  }
}

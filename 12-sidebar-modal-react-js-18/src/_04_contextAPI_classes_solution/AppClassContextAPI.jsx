import { Component } from "react";
import { Modal, Sidebar, Home } from "./components";
import SidebarContextProvider from "./context/SidebarContext";

export default class AppClassContextAPI extends Component {
  render() {
    return (
      <SidebarContextProvider>
        <p className="title"> context API classes solution</p>
        <Home />
        <Modal />
        <Sidebar />
      </SidebarContextProvider>
    );
  }
}

import { Component } from "react";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import Home from "./components/Home";

export default class AppClass extends Component {
  state = {
    isSideBarOpen: false,
    isModalOpen: false,
  };

  toggleModal = () =>
    this.setState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));

  toggleSideBar = () => {
    this.setState((prevState) => ({
      ...prevState,
      isSideBarOpen: !prevState.isSideBarOpen,
    }));
  };

  render() {
    return (
      <>
        <br /> <hr /> <br />
        <p style={{ textAlign: "center" }}>classes solution</p>
        <Home
          isModalOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
          isSideBarOpen={this.state.isSideBarOpen}
          toggleSideBar={this.toggleSideBar}
        />
        <Modal
          isModalOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
        />
        <Sidebar
          isSideBarOpen={this.state.isSideBarOpen}
          toggleSideBar={this.toggleSideBar}
        />
      </>
    );
  }
}

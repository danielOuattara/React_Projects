import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import { ToggleContext } from "./contextClass";

export default class HomeClass extends Component {
  render() {
    return (
      <ToggleContext.Consumer>
        {(context) => {
          const { showModal, showSideBar, toggleModal, toggleSideBar } =
            context;
          return (
            <main>
              <button
                className="sidebar-toggle"
                onClick={() => toggleSideBar()}
              >
                <FaBars />
              </button>
              <button className="btn" onClick={() => toggleModal()}>
                show modal
              </button>
            </main>
          );
        }}
      </ToggleContext.Consumer>
    );
  }
}

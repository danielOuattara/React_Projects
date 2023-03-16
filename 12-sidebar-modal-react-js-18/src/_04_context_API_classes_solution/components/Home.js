import { Component } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

export default class Home extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <main>
            <button
              className="sidebar-toggle"
              onClick={() => context.toggleSideBar(!context.isSideBarOpen)}
            >
              <FaBars />
            </button>
            <button
              className="btn"
              onClick={() => context.toggleModal(!context.isModalOpen)}
            >
              show modal
            </button>
          </main>
        )}
      </AppContext.Consumer>
    );
  }
}

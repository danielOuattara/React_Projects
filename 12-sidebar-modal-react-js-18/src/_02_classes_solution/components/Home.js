import { Component } from "react";
import { FaBars } from "react-icons/fa";

export default class Home extends Component {
  render() {
    return (
      <main>
        <button
          className="sidebar-toggle"
          onClick={() => this.props.toggleSideBar(!this.props.isSideBarOpen)}
        >
          <FaBars />
        </button>
        <button
          className="btn"
          onClick={() => this.props.toggleModal(!this.props.isModalOpen)}
        >
          show modal
        </button>
      </main>
    );
  }
}

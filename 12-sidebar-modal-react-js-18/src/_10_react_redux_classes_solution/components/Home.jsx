import { Component } from "react";
import { FaBars } from "react-icons/fa";
import { connect } from "react-redux";
import { toggleModal, toggleSidebar } from "../redux/sidebar/sidebarActions";

class Home extends Component {
  render() {
    return (
      <main>
        <button
          className="sidebar-toggle"
          onClick={() => this.props.handleToggleSidebar()}
        >
          <FaBars />
        </button>
        <button className="btn" onClick={() => this.props.handleToggleModal()}>
          show modal NOW
        </button>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleSidebar() {
      return dispatch(toggleSidebar());
    },

    handleToggleModal() {
      return dispatch(toggleModal());
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);

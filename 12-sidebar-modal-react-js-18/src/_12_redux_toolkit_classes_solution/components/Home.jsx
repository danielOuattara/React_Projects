import { Component } from "react";
import { FaBars } from "react-icons/fa";
import { connect } from "react-redux";
import { sidebarActions } from "../redux/sidebar/sidebar-slice";

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
      return dispatch(sidebarActions.toggleSidebar());
    },

    handleToggleModal() {
      return dispatch(sidebarActions.toggleModal());
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);

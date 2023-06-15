import { Component } from "react";
import { connect } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { sidebarActions } from "../redux/sidebar/sidebar-slice";

class Modal extends Component {
  render() {
    return (
      <div
        className={
          this.props.isModalOpen ? `modal-overlay show-modal` : `modal-overlay`
        }
      >
        <div className="modal-container">
          <h3>modal content</h3>
          <p>redux toolkit classes solution</p>
          <button
            className="close-modal-btn"
            onClick={() => this.props.handleToggleModal()}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.sidebarState.isModalOpen,
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

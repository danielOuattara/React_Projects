import { Component } from "react";
import { FaTimes } from "react-icons/fa";

export default class Modal extends Component {
  render() {
    return (
      <div
        className={
          this.props.isModalOpen ? `modal-overlay show-modal` : `modal-overlay`
        }
      >
        <div className="modal-container">
          <h3>modal content</h3>
          <p>classes solution</p>
          <button
            className="close-modal-btn"
            onClick={() => this.props.toggleModal(!this.props.isModalOpen)}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    );
  }
}

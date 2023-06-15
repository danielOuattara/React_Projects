import { Component } from "react";
import { FaTimes } from "react-icons/fa";
import { SidebarContext } from "../context/SidebarContext";

export default class Modal extends Component {
  render() {
    return (
      <SidebarContext.Consumer>
        {(context) => (
          <div
            className={
              context.isModalOpen ? `modal-overlay show-modal` : `modal-overlay`
            }
          >
            <div className="modal-container">
              <h3>modal content</h3>
              <p>context API classes solution</p>
              <button
                className="close-modal-btn"
                onClick={() => context.toggleModal(!context.isModalOpen)}
              >
                <FaTimes />
              </button>
            </div>
          </div>
        )}
      </SidebarContext.Consumer>
    );
  }
}

import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import { ToggleContext } from "./contextClass";

export class ModalClass extends Component {
  render() {
    return (
      <ToggleContext.Consumer>
        {(context) => {
          const { showModal, toggleModal } =
            context;
          return (
            <div
              className={
                showModal ? `modal-overlay show-modal` : `modal-overlay`
              }
            >
              <div className="modal-container">
                <h3>modal content</h3>
                <button
                  className="close-modal-btn"
                  onClick={() => toggleModal()}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          );
        }}
      </ToggleContext.Consumer>
    );
  }
}

export default ModalClass;

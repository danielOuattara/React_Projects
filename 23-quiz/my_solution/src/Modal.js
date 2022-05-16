import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const {
    setWaiting,
    questions,
    correctAnswers,
    setCorrectAnswers,
    isModalOpen,
    setIsModalOpen,
  } = useGlobalContext();

  const closeModal = () => {
    setWaiting(true);
    setCorrectAnswers(0);
    setIsModalOpen(false);
  };

  return (
    <div className={`modal-container ${isModalOpen ? "isOpen" : " "}`}>
      <div className="modal-content">
        <h2 className="modal-content">Congratulations !</h2>
        <p>
          You answsered correctly to {""}
          {((correctAnswers / questions.length) * 100).toFixed(0)} % of
          questions
        </p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;

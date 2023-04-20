import { useQuizContext } from "./../context";
import { HANDLE_PLAY_AGAIN } from "./../actions/quizActions";

export default function Modal() {
  const { isModalOpen, userCorrectAnswers, questions, dispatchQuiz } =
    useQuizContext();

  const closeModal = () => {
    dispatchQuiz({ type: HANDLE_PLAY_AGAIN });
  };

  return (
    <div className={`modal-container ${isModalOpen ? "isOpen" : " "} `}>
      <div className="modal-content">
        <h2 className="modal-content">Congratulations !</h2>
        <p>
          {" "}
          You answered correctly to{" "}
          {((userCorrectAnswers / questions.length) * 100).toFixed(0)} % of
          questions{" "}
        </p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
}

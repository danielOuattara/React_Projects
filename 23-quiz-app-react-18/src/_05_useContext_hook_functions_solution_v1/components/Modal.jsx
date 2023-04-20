import { useQuizContext } from "./../context";

export default function Modal() {
  const { isModalOpen, userCorrectAnswers, questions, setQuizState } =
    useQuizContext();

  const closeModal = () => {
    setQuizState((prevState) => ({
      ...prevState,
      isWaiting: true,
      userCorrectAnswers: 0,
      isModalOpen: false,
      index: 0,
    }));
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

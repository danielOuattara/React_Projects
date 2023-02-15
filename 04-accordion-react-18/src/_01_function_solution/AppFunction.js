import questions from "./../data";
import QuestionFunction from "./QuestionFunction";

function App() {
  return (
    <div className="container">
      <h3>
        question and answer about login <b>(function components)</b>
      </h3>
      <section className="info">
        <ul>
          {questions.map((item) => {
            const { id } = item;
            return (
              <li key={id}>
                <QuestionFunction {...item} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;

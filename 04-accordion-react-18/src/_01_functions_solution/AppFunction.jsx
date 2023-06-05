import questions from "./../data";
import QuestionFunction from "./components/QuestionFunction";

function App() {
  return (
    <div className="container">
      <h3>
        Q&A <b>(function solution)</b>
      </h3>
      <section className="info">
        <ul>
          {questions.map((item) => {
            return (
              <li key={item.id}>
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

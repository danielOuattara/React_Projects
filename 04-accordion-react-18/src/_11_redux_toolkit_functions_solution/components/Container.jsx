import Questions from "./Question";
import { useSelector } from "react-redux";
//---------------------------------------------------------

export default function Container(props) {
  const { questions } = useSelector((state) => state.questionAnswer);
  return (
    <div className="container">
      <h3>
        Q&A
        <b>( redux toolkit + functions solution)</b>
      </h3>
      <section className="info">
        <ul>
          {questions.map((item) => {
            return (
              <li key={item.id}>
                <Questions {...item} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

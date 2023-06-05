import Questions from "./Question";
import { connect } from "react-redux";

//---------------------------------------------------------

function Container(props) {
  return (
    <div className="container">
      <h3>
        Q&A
        <b>( redux + functions solution)</b>
      </h3>
      <section className="info">
        <ul>
          {props.questions.map((item) => {
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

const mapStateToProps = (state) => {
  return {
    questions: state.questionsState.questions,
  };
};

export default connect(mapStateToProps, null)(Container);

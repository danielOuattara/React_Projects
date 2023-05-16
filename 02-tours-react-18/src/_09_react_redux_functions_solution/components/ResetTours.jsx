import { connect } from "react-redux";
import { fetchTours } from "./../redux/tours/toursActions";

function ResetTours(props) {
  return (
    <main>
      <div className="title">
        <p>react redux functions solution</p>
        <h2>no tour left</h2>
        <button className="btn" onClick={props.fetchTours}>
          refresh
        </button>
      </div>
    </main>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTours: () => dispatch(fetchTours()),
  };
};

export default connect(null, mapDispatchToProps)(ResetTours);

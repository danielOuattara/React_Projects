import { Component } from "react";
import { connect } from "react-redux";
import { fetchTours } from "../store/tours/tours-async-actions";

class ResetTours extends Component {
  render() {
    return (
      <main>
        <div className="title">
          <p>react redux toolkit + classes solution</p>
          <h2>no tour left</h2>
          <button className="btn" onClick={this.props.fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTours: () => dispatch(fetchTours()),
  };
};

export default connect(null, mapDispatchToProps)(ResetTours);

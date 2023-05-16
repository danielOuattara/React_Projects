import { Component } from "react";
import { connect } from "react-redux";
import { fetchTours } from "./../redux/tours/toursActions";

class ResetTours extends Component {
  render() {
    return (
      <main>
        <div className="title">
          <p>react redux classes solution</p>
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

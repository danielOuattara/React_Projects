import { Component } from "react";
import Error from "./Error";
import Loading from "./LoadingFunction";
import ResetTours from "./ResetTours";
import Tours from "./ToursFunction";
import { connect } from "react-redux";
import { REMOVE_ONE_TOUR, fetchTours } from "./../redux/tours/toursActions";

class ContainerClassRedux extends Component {
  componentDidMount() {
    this.props.fetchTours();
  }
  render() {
    if (this.props.state.isError) {
      return <Error />;
    }

    if (this.props.state.loading) {
      return <Loading />;
    }

    if (this.props.state.tours.length === 0) {
      return <ResetTours fetchTours={this.props.fetchTours} />;
    }

    return <Tours />;
  }
}

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTourItem: (id) => dispatch({ type: REMOVE_ONE_TOUR, payload: id }),
    fetchTours: () => dispatch(fetchTours()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerClassRedux);

import { Component } from "react";
import Error from "./Error";
import Loading from "./LoadingFunction";
import ResetTours from "./ResetTours";
import Tours from "./ToursClass";
import { connect } from "react-redux";
import { fetchTours } from "../store/tours/tours-async-actions";

class ContainerClassReduxToolkit extends Component {
  componentDidMount() {
    this.props.fetchTours();
  }

  render() {
    const { isError, loading, tours } = this.props.tours;
    if (isError) {
      return <Error isError={this.props.isError} />;
    }

    if (loading) {
      return <Loading />;
    }

    if (tours.length === 0) {
      return <ResetTours />;
    }

    return <Tours />;
  }
}

const mapStateToProps = (state) => {
  return { tours: state.tours };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTours: () => dispatch(fetchTours()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerClassReduxToolkit);

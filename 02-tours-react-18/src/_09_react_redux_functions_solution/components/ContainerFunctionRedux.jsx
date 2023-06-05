import Error from "./Error";
import Loading from "./LoadingFunction";
import ResetTours from "./ResetTours";
import Tours from "./ToursFunction";
import { connect } from "react-redux";
import { REMOVE_ONE_TOUR, fetchTours } from "./../redux/tours/toursActions";

import { useEffect } from "react";

function ContainerFunctionRedux(props) {
  const fetchTours = props.fetchTours;
  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  if (props.state.isError) {
    return <Error />;
  }

  if (props.state.loading) {
    return <Loading />;
  }

  if (props.state.tours.length === 0) {
    return <ResetTours fetchTours={props.fetchTours} />;
  }

  return <Tours />;
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
)(ContainerFunctionRedux);

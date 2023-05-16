import Error from "./Error";
import Loading from "./LoadingFunction";
import ResetTours from "./ResetTours";
import Tours from "./ToursFunction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTours } from "../store/tours/tours-async-actions";

export default function ContainerFunctionReduxToolkit(props) {
  const { isError, loading, tours } = useSelector((state) => state.tours);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  if (isError) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return <ResetTours fetchTours={props.fetchTours} />;
  }

  return <Tours />;
}

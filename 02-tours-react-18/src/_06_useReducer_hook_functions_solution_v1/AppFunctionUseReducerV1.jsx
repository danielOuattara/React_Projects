import { useEffect, useReducer } from "react";
import Error from "./components/Error";
import LoadingFunction from "./components/LoadingFunction";
import ResetTours from "./components/ResetTours";
import Tours from "./components/ToursFunction";
import {
  REMOVE_ONE_TOUR,
  START_FETCH_TOURS,
  HANDLE_FETCH_ERROR,
  HANDLE_FETCH_SUCCESS,
  HANDLE_ERROR,
} from "./reducer/toursReducer";
import { toursReducer } from "./reducer/toursReducer";

const url = "https://course-api.com/react-tours-project";

const initialToursState = {
  loading: false,
  isError: false,
  errorMessage: "",
  tours: [],
};

export default function AppFunctionUseReducerV1() {
  const [toursState, dispatchTours] = useReducer(
    toursReducer,
    initialToursState,
  );

  const fetchTours = async () => {
    try {
      dispatchTours({ type: START_FETCH_TOURS });
      const res = await fetch(url);
      if (!res.ok) {
        dispatchTours({
          type: HANDLE_FETCH_ERROR,
          payload: { errorMessage: `${res.status} ${res.statusText}` },
        });
        throw Error(`${res.status} ${res.statusText}`);
      }
      const toursData = await res.json();
      dispatchTours({ type: HANDLE_FETCH_SUCCESS, payload: { toursData } });
    } catch (err) {
      dispatchTours({ type: HANDLE_ERROR });
      return err;
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTourItem = (id) =>
    dispatchTours({ type: REMOVE_ONE_TOUR, payload: id });

  if (toursState.isError) {
    return <Error errorMessage={toursState.errorMessage} />;
  }

  if (toursState.loading) {
    return <LoadingFunction />;
  }

  if (toursState.tours.length === 0) {
    return <ResetTours fetchTours={fetchTours} />;
  }

  return <Tours tours={toursState.tours} removeTourItem={removeTourItem} />;
}

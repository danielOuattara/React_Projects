import { useEffect, useReducer } from "react";
import {
  REMOVE_ONE_TOUR,
  START_FETCH_TOURS,
  HANDLE_FETCH_ERROR,
  HANDLE_FETCH_SUCCESS,
  HANDLE_ERROR,
} from "./../reducer/toursReducer";
import { toursReducer } from "./../reducer/toursReducer";

//-------------------------------------------------------------

const url = "https://course-api.com/react-tours-project";

const initialToursState = {
  loading: false,
  isError: false,
  errorMessage: "",
  tours: [],
};

export default function useFetchTours() {
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

  const removeTourItem = (id) =>
    dispatchTours({ type: REMOVE_ONE_TOUR, payload: id });

  useEffect(() => {
    fetchTours();
  }, []);

  return { ...toursState, removeTourItem, fetchTours };
}

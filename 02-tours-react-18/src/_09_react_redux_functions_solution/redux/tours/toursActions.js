const url = "https://www.course-api.com/react-tours-project";

const REMOVE_ONE_TOUR = "REMOVE_ONE_TOUR";
const START_FETCH_TOURS = "START_FETCH_TOURS";
const HANDLE_FETCH_ERROR = "HANDLE_FETCH_ERROR";
const HANDLE_FETCH_SUCCESS = "HANDLE_FETCH_SUCCESS";
const HANDLE_ERROR = "HANDLE_ERROR";

export {
  REMOVE_ONE_TOUR,
  START_FETCH_TOURS,
  HANDLE_FETCH_ERROR,
  HANDLE_FETCH_SUCCESS,
  HANDLE_ERROR,
};

export const fetchTours = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: START_FETCH_TOURS });
      const res = await fetch(url);
      if (!res.ok) {
        dispatch({
          type: HANDLE_FETCH_ERROR,
          payload: { errorMessage: `${res.status} ${res.statusText}` },
        });
        throw Error(`${res.status} ${res.statusText}`);
      }
      const toursData = await res.json();
      dispatch({ type: HANDLE_FETCH_SUCCESS, payload: { toursData } });
    } catch (err) {
      dispatch({ type: HANDLE_ERROR });
      return err;
    }
  };
};

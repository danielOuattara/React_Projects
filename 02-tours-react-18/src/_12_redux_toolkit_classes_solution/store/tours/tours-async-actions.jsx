import { toursActions } from "./tours-slice";

const url = "https://www.course-api.com/react-tours-project";

export const fetchTours = () => {
  return async function (dispatch) {
    try {
      dispatch(toursActions.startFetchTours());
      const res = await fetch(url);
      if (!res.ok) {
        dispatch(
          toursActions.handleFetchError({
            errorMessage: `${res.status} ${res.statusText}`,
          }),
        );
        throw Error(`${res.status} ${res.statusText}`);
      }
      const toursData = await res.json();
      dispatch(toursActions.handleFetchSuccess({ toursData }));
    } catch (err) {
      dispatch(toursActions.handleError());
      return err;
    }
  };
};

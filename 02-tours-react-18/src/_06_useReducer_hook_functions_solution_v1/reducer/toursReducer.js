const RESET_ALL_TOURS = "RESET_ALL_TOURS";
const REMOVE_ONE_TOUR = "REMOVE_ONE_TOUR";
const START_FETCH_TOURS = "START_FETCH_TOURS";
const HANDLE_FETCH_ERROR = "HANDLE_FETCH_ERROR";
const HANDLE_FETCH_SUCCESS = "HANDLE_FETCH_SUCCESS";
const HANDLE_ERROR = "HANDLE_ERROR";

export {
  REMOVE_ONE_TOUR,
  RESET_ALL_TOURS,
  START_FETCH_TOURS,
  HANDLE_FETCH_ERROR,
  HANDLE_FETCH_SUCCESS,
  HANDLE_ERROR,
};

export const toursReducer = (state, action) => {
  switch (action.type) {
    case REMOVE_ONE_TOUR:
      return {
        ...state,
        tours: state.tours.filter((tour) => tour.id !== action.payload),
      };

    case START_FETCH_TOURS:
      return {
        ...state,
        loading: true,
        isError: false,
        errorMessage: "",
      };

    case HANDLE_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: "",
        tours: action.payload.toursData,
      };

    case HANDLE_FETCH_ERROR:
      return {
        ...state,
        loading: true,
        isError: false,
        errorMessage: action.payload.errMessage,
      };

    case HANDLE_ERROR:
      return {
        ...state,
        loading: false,
        isError: false,
      };

    default:
      return state;
  }
};

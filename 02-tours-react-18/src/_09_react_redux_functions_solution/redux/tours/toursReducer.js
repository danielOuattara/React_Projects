import {
  REMOVE_ONE_TOUR,
  START_FETCH_TOURS,
  HANDLE_FETCH_ERROR,
  HANDLE_FETCH_SUCCESS,
  HANDLE_ERROR,
} from "./toursActions.js";

const initialToursState = {
  loading: false,
  isError: false,
  errorMessage: "",
  tours: [],
};

export const toursReducer = (state = initialToursState, action) => {
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

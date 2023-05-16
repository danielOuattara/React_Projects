import { createSlice } from "@reduxjs/toolkit";

const initialToursState = {
  loading: false,
  isError: false,
  errorMessage: "",
  tours: [],
};

const toursSlice = createSlice({
  name: "tours",
  initialState: initialToursState,
  reducers: {
    startFetchTours(state) {
      return {
        ...state,
        loading: true,
        isError: false,
        errorMessage: "",
      };
    },
    removeOneTour(state, action) {
      return {
        ...state,
        tours: state.tours.filter((tour) => tour.id !== action.payload),
      };
    },
    handleFetchSuccess(state, action) {
      return {
        ...state,
        loading: false,
        errorMessage: "",
        tours: action.payload.toursData,
      };
    },
    handleFetchError(state, action) {
      return {
        ...state,
        loading: true,
        isError: false,
        errorMessage: action.payload.errMessage,
      };
    },
    handleError(state) {
      return {
        ...state,
        loading: false,
        isError: false,
      };
    },
  },
});

export const toursActions = toursSlice.actions;

export default toursSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import data from "./../../../data";

const initialSliderState = {
  index: 0,
  people: [...data],
};

const sliderSlice = createSlice({
  name: "slider-slice",
  initialState: initialSliderState,
  reducers: {
    updateIndex(state, action) {
      state.index = state.index + action.payload;
    },

    checkIndex(state, action) {
      let newIndex = "";
      if (action.payload === -1) {
        newIndex = state.people.length - 1;
      } else if (action.payload === state.people.length) {
        newIndex = 0;
      } else {
        newIndex = action.payload;
      }

      state.index = newIndex;
    },
  },
});

export const sliderActions = sliderSlice.actions;

export default sliderSlice.reducer;

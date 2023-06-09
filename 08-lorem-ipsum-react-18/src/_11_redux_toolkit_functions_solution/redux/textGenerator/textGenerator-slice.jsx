import { createSlice } from "@reduxjs/toolkit";
import data from "./../../../data";

const initialTextGenState = {
  numberOfParagraph: "1",
  text: [],
  data: [...data],
};

const textGeneratorSlice = createSlice({
  name: "textGeneratorSlice",
  initialState: initialTextGenState,
  reducers: {
    setNumberOfParagraph(state, action) {
      state.numberOfParagraph = action.payload;
    },

    handleGenerateText(state, action) {
      state.text = state.data.slice(0, parseInt(state.numberOfParagraph));
    },
  },
});

export const textGeneratorActions = textGeneratorSlice.actions;

export default textGeneratorSlice.reducer;

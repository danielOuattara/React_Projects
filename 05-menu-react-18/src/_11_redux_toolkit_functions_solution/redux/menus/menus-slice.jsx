import { createSlice } from "@reduxjs/toolkit";
import menusData from "./../../../data";

const categories = ["all", ...new Set(menusData.map((item) => item.category))];

const menuInitialState = {
  category: "all",
  categories,
};

const menusSlice = createSlice({
  name: "menusSlice",
  initialState: menuInitialState,
  reducers: {
    selectCategory(state, action) {
      state.category = action.payload.categoryName;
    },
  },
});

export const menusActions = menusSlice.actions;
export default menusSlice.reducer;

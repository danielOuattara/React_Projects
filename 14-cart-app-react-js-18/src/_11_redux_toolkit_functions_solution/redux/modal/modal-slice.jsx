import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalVisible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isModalVisible = true;
    },

    hideModal: (state) => {
      state.isModalVisible = false;
    },
  },
});

export default modalSlice.reducer;

export const { showModal, hideModal } = modalSlice.actions;

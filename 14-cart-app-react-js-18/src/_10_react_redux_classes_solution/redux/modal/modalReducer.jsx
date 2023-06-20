import { HIDE_MODAL, SHOW_MODAL } from "./modalActions";

const initialModalState = {
  isModalVisible: false,
};

export const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isModalVisible: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isModalVisible: false,
      };

    default:
      return state;
  }
};

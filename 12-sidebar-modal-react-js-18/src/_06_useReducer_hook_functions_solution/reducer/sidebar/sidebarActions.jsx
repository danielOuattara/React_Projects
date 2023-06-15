const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
const TOGGLE_MODAL = "TOGGLE_MODAL";

const toggleSidebar = (state, action) => {
  return {
    type: TOGGLE_SIDEBAR,
  };
};

const toggleModal = (state, action) => {
  return {
    type: TOGGLE_MODAL,
  };
};

export { TOGGLE_SIDEBAR, TOGGLE_MODAL, toggleSidebar, toggleModal };

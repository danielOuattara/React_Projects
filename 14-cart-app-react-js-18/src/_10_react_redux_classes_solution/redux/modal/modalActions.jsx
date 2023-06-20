const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";

const showModal = () => ({ type: SHOW_MODAL });
const hideModal = () => ({ type: HIDE_MODAL });

export { SHOW_MODAL, HIDE_MODAL, showModal, hideModal };

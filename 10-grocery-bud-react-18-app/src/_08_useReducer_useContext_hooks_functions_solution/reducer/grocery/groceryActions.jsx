const UPDATE_ITEM_IN_LIST = "UPDATE_ITEM_IN_LIST";
const CLEAR_ITEMS_LIST = "CLEAR_ITEMS_LIST";
const DELETE_ITEM = "DELETE_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const SHOW_ALERT = "SHOW_ALERT";
const HANDLE_SUBMIT = "HANDLE_SUBMIT";
const HANDLE_CHANGE_ITEM_NAME = "HANDLE_CHANGE_ITEM_NAME";

const updateItemInList = (newList) => {
  return {
    type: UPDATE_ITEM_IN_LIST,
    payload: newList,
  };
};

const clearItemsList = () => {
  return {
    type: CLEAR_ITEMS_LIST,
  };
};

const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

const editItem = (id) => {
  return {
    type: EDIT_ITEM,
    payload: id,
  };
};

const showAlert = (show = false, type = "", msg = "") => {
  return {
    type: SHOW_ALERT,
    payload: { show, type, msg },
  };
};

const handleSubmit = () => {
  return {
    type: HANDLE_SUBMIT,
  };
};

const handleChangeItemName = (value) => {
  return {
    type: HANDLE_CHANGE_ITEM_NAME,
    payload: value,
  };
};

export {
  UPDATE_ITEM_IN_LIST,
  CLEAR_ITEMS_LIST,
  DELETE_ITEM,
  EDIT_ITEM,
  SHOW_ALERT,
  HANDLE_SUBMIT,
  HANDLE_CHANGE_ITEM_NAME,
  updateItemInList,
  clearItemsList,
  deleteItem,
  editItem,
  showAlert,
  handleSubmit,
  handleChangeItemName,
};

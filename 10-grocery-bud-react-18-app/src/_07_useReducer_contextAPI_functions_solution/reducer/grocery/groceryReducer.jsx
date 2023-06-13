import {
  UPDATE_ITEM_IN_LIST,
  CLEAR_ITEMS_LIST,
  DELETE_ITEM,
  EDIT_ITEM,
  SHOW_ALERT,
  HANDLE_SUBMIT,
  HANDLE_CHANGE_ITEM_NAME,
} from "./groceryActions";

export const groceryReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ITEM_IN_LIST:
      return {
        ...state,
        itemsList: action.payload,
        itemName: "",
        editID: "null",
        isEditing: false,
        alert: {
          show: true,
          type: "success",
          msg: "Item successfully edited",
        },
      };

    case CLEAR_ITEMS_LIST:
      return {
        ...state,
        itemsList: [],
        alert: {
          show: true,
          type: "danger",
          msg: "Emptying list",
        },
      };
    case DELETE_ITEM:
      const filteredItemsList = state.itemsList.filter(
        (item) => item.id !== action.payload,
      );
      return {
        ...state,
        itemsList: filteredItemsList,
        alert: {
          show: true,
          type: "success",
          msg: "Item successfully removed",
        },
      };

    case EDIT_ITEM:
      const editingItem = state.itemsList.find(
        (item) => item.id === action.payload,
      );
      return {
        ...state,
        isEditing: true,
        editID: action.payload,
        itemName: editingItem.title,
      };

    case SHOW_ALERT:
      return {
        ...state,
        alert: {
          show: action.payload.show,
          type: action.payload.type,
          msg: action.payload.msg,
        },
      };

    case HANDLE_SUBMIT:
      if (!state.itemName) {
        //display alert & do nothing
        return {
          ...state,
          alert: {
            show: true,
            type: "danger",
            msg: "Select a valid name for item",
          },
        };
      } else if (state.itemName && state.isEditing) {
        // edit item
        const updatedItemsList = state.itemsList.map((item) => {
          if (item.id === state.editID) {
            return { ...item, title: state.itemName };
          }
          return item;
        });

        return {
          ...state,
          itemsList: updatedItemsList,
          itemName: "",
          editID: "",
          isEditing: false,
        };
      } else {
        // add new item + show add alert
        const newItemsList = [
          ...state.itemsList,
          {
            id: new Date().getTime().toString(),
            title: state.itemName,
          },
        ];
        return {
          ...state,
          itemsList: newItemsList,
          alert: {
            show: true,
            type: "success",
            msg: "Item successfully added",
          },
          itemName: "",
        };
      }

    case HANDLE_CHANGE_ITEM_NAME:
      return {
        ...state,
        itemName: action.payload,
      };

    default:
      return state;
  }
};

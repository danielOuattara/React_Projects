import { createSlice } from "@reduxjs/toolkit";

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("grocery_redux_toolkit_classes");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("grocery_redux_toolkit_classes"));
  } else {
    return [];
  }
};

const initialGroceryState = {
  itemName: "",
  itemsList: retrieveLocalStorage(),
  isEditing: false,
  editID: null,
  alert: { show: false, msg: "", type: "" },
};

const grocerySlice = createSlice({
  name: "grocery-slice",
  initialState: initialGroceryState,
  reducers: {
    updateItemInList(state, action) {
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
    },

    clearItemsList(state, action) {
      return {
        ...state,
        itemsList: [],
        alert: {
          show: true,
          type: "danger",
          msg: "Emptying list",
        },
      };
    },

    deleteItem(state, action) {
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
    },

    editItem(state, action) {
      const editingItem = state.itemsList.find(
        (item) => item.id === action.payload,
      );
      return {
        ...state,
        isEditing: true,
        editID: action.payload,
        itemName: editingItem.title,
      };
    },

    showAlert(state, action) {
      return {
        ...state,
        alert: {
          show: false || action.payload.show,
          type: "" || action.payload.type,
          msg: "" || action.payload.msg,
        },
      };
    },

    handleSubmit(state, action) {
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
    },

    handleChangeItemName(state, action) {
      return {
        ...state,
        itemName: action.payload,
      };
    },
  },
});

export const groceryActions = grocerySlice.actions;

export default grocerySlice.reducer;

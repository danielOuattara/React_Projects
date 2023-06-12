import { createContext, useState, useEffect } from "react";

export const GroceryContext = createContext();

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsListContextAPI_V3");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsListContextAPI_V3"));
  } else {
    return [];
  }
};

export default function GroceryContextProvider(props) {
  const [state, setState] = useState({
    itemName: "",
    itemsList: retrieveLocalStorage(),
    isEditing: false,
    editID: "",
    alert: {
      show: false,
      msg: "",
      type: "",
    },
  });

  //---------------------------------------

  const showAlert = (show = false, type = "", msg = "") => {
    return setState((prevState) => ({
      ...prevState,
      alert: { show, type, msg },
    }));
  };

  //---------------------------------------
  const handleChangeItemName = (value) => {
    return setState((prevState) => ({
      ...prevState,
      itemName: value,
    }));
  };

  //---------------------------------------

  const handleSubmitItem = (event) => {
    event.preventDefault();
    if (!state.itemName) {
      //display alert & do nothing
      showAlert(true, "danger", "select a valid item name");
    } else if (state.itemName && state.isEditing) {
      // edit item
      setState((prevState) => ({
        ...prevState,
        itemsList: [
          ...prevState.itemsList.map((item) => {
            if (item.id === state.editID) {
              return { ...item, title: state.itemName };
            }
            return item;
          }),
        ],
        itemName: "",
        editID: "",
        isEditing: false,
      }));

      showAlert(true, "success", "Item successfully edited");
    } else {
      // add new item + show add alert
      setState((prevState) => ({
        ...prevState,
        itemsList: [
          ...prevState.itemsList,
          {
            id: new Date().getTime().toString(),
            title: state.itemName,
          },
        ],
        itemName: "",
      }));
      showAlert(true, "success", "item added successfully");
    }
  };

  //--------------------------------------

  const clearItemsList = () => {
    setState((prevState) => ({ ...prevState, itemsList: [] }));
    showAlert(true, "danger", "emptying list");
  };

  //---------------------------------------

  const deleteItem = (id) => {
    setState((prevState) => ({
      ...prevState,
      itemsList: [...prevState.itemsList.filter((item) => item.id !== id)],
    }));
    showAlert(true, "success", "item successfully removed");
  };

  //---------------------------------------

  const editItem = (id) => {
    const editingItem = state.itemsList.find((item) => item.id === id);
    setState((prevState) => ({
      ...prevState,
      isEditing: true,
      editID: id,
      itemName: editingItem.title,
    }));
  };

  //---------------------------------------

  useEffect(() => {
    localStorage.setItem(
      "itemsListContextAPI_V3",
      JSON.stringify(state.itemsList),
    );
  }, [state.itemsList]);

  const context = {
    isEditing: state.isEditing,
    alert: state.alert,
    itemName: state.itemName,
    itemsList: state.itemsList,
    showAlert,
    handleChangeItemName,
    handleSubmitItem,
    clearItemsList,
    deleteItem,
    editItem,
  };

  return (
    <GroceryContext.Provider value={context}>
      {props.children}
    </GroceryContext.Provider>
  );
}

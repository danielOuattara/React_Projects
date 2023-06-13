import { createContext, useState, useEffect, useContext } from "react";

const GroceryContext = createContext();

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsListContextAPI_V4");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsListContextAPI_V4"));
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
      return setState((prevState) => ({
        ...prevState,
        alert: { show: true, type: "danger", msg: "select a valid item name" },
      }));
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
        alert: { show: true, type: "success", msg: "Item successfully edited" },
      }));
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
        alert: {
          show: true,
          type: "success",
          msg: "item added successfully",
        },
      }));
    }
  };

  //--------------------------------------

  const clearItemsList = () => {
    setState((prevState) => ({
      ...prevState,
      itemsList: [],
      alert: {
        show: true,
        type: "danger",
        msg: "emptying list",
      },
    }));
  };

  //---------------------------------------

  const deleteItem = (id) => {
    setState((prevState) => ({
      ...prevState,
      itemsList: [...prevState.itemsList.filter((item) => item.id !== id)],
      alert: {
        show: true,
        type: "success",
        msg: "item successfully removed",
      },
    }));
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
      "itemsListContextAPI_V4",
      JSON.stringify(state.itemsList),
    );
  }, [state.itemsList]);

  const context = {
    itemName: state.itemName,
    itemsList: state.itemsList,
    isEditing: state.isEditing,
    alert: state.alert,
    setState,
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

export const useGroceryContext = () => {
  return useContext(GroceryContext);
};

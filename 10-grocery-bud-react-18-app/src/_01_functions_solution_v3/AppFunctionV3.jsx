import { useState, useEffect } from "react";
import { List, ItemForm } from "./components";

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsListV3");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsListV3"));
  } else {
    return [];
  }
};

export default function AppFunctionV3() {
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
      return showAlert(true, "danger", "select a valid item name");

      //
    } else if (state.itemName && state.isEditing) {
      // edit itemName + show edit alert
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
      //
    } else {
      // add new itemName + show add alert
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

  //---------------------------------------
  const showAlert = (show = false, type = "", msg = "") =>
    setState((prevState) => ({
      ...prevState,
      alert: {
        show,
        type,
        msg,
      },
    }));

  //---------------------------------------
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
    localStorage.setItem("itemsListV3", JSON.stringify(state.itemsList));
  }, [state.itemsList]);

  return (
    <section className="section-center ">
      <p>function solution version 3 : global state + showAlert()</p>

      <ItemForm
        isEditing={state.isEditing}
        alert={state.alert}
        itemName={state.itemName}
        handleSubmitItem={handleSubmitItem}
        showAlert={showAlert}
        handleChangeItemName={handleChangeItemName}
      />

      {state.itemsList.length > 0 && (
        <div className="grocery-container">
          <List
            itemsList={state.itemsList}
            deleteItem={deleteItem}
            editItem={editItem}
          />
          <button className="clear-btn" onClick={clearItemsList}>
            clear all items
          </button>
        </div>
      )}
    </section>
  );
}

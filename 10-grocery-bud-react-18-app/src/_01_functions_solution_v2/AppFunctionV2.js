import React, { useState, useEffect } from "react";
import List from "./components/List";
import Alert from "./components/Alert";

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsListV2");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsListV2"));
  } else {
    return [];
  }
};

export default function AppFunctionV2() {
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
  const handleChange = (event) => {
    return setState((prevState) => ({
      ...prevState,
      itemName: event.target.value,
    }));
  };

  //---------------------------------------
  const handleSubmitItem = (event) => {
    event.preventDefault();
    if (!state.itemName) {
      //display alert & do nothing
      return showAlert(true, "danger", "select a valid itemName name");
      //
    } else if (state.itemName && state.isEditing) {
      // edit itemName
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
      showAlert(true, "success", "itemName added successfully");
    }
  };

  //---------------------------------------
  const showAlert = (show = false, type = "", msg = "") => {
    setState((prevState) => ({
      ...prevState,
      alert: {
        show,
        type,
        msg,
      },
    }));
  };

  //---------------------------------------
  const clearItemsList = () => {
    setState((prevState) => ({ ...prevState, itemsList: [] }));
    showAlert(true, "danger", "emptying list");
  };

  //---------------------------------------
  const deleteItem = (id) => {
    setState((prevState) => ({
      ...prevState,
      itemsList: [
        ...prevState.itemsList.filter((itemName) => itemName.id !== id),
      ],
    }));
    showAlert(true, "success", "itemName successfully removed");
  };

  //---------------------------------------
  const editItem = (id) => {
    const editingItem = state.itemsList.find((itemName) => itemName.id === id);
    setState((prevState) => ({
      ...prevState,
      isEditing: true,
      editID: id,
      itemName: editingItem.title,
    }));
  };

  //---------------------------------------
  useEffect(() => {
    localStorage.setItem("itemsListV2", JSON.stringify(state.itemsList));
  }, [state.itemsList]);

  return (
    <section className="section-center ">
      <p>function solution version 2</p>

      <form className="grocery-form" onSubmit={handleSubmitItem}>
        {/* {alert.show && <AlertFunction {...alert} />} */}
        <Alert {...state.alert} showAlert={showAlert} />
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={state.itemName}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">
            {state.isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
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

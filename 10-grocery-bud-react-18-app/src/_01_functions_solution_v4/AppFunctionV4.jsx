import { useState, useEffect } from "react";
import { ItemForm, List } from "./components";

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsListV4");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsListV4"));
  } else {
    return [];
  }
};

export default function AppFunctionV4() {
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
        alert: {
          ...prevState.alert,
          show: true,
          type: "danger",
          msg: "select a valid item name",
        },
      }));
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
        alert: {
          ...prevState.alert,
          show: true,
          type: "success",
          msg: "Item successfully edited",
        },
      }));

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
        alert: {
          ...prevState.alert,
          show: true,
          type: "success",
          msg: "item added successfully",
        },
      }));
    }
  };

  //---------------------------------------
  const clearItemsList = () => {
    setState((prevState) => ({
      ...prevState,
      itemsList: [],
      alert: {
        ...prevState.alert,
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
        ...prevState.alert,
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
    localStorage.setItem("itemsListV4", JSON.stringify(state.itemsList));
  }, [state.itemsList]);

  return (
    <section className="section-center ">
      <p>function solution version 4 : global state + NO showAlert()</p>

      <ItemForm
        itemName={state.itemName}
        isEditing={state.isEditing}
        alert={state.alert}
        setState={setState}
        handleSubmitItem={handleSubmitItem}
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

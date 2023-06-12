import { useState, useEffect } from "react";
import { List, ItemForm } from "./components";

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsListV2");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsListV2"));
  } else {
    return [];
  }
};

export default function AppFunctionV2() {
  const [item, setItem] = useState("");
  const [itemsList, setItemsList] = useState(retrieveLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  //---------------------------------------
  const handleSubmitItem = (event) => {
    event.preventDefault();
    if (!item) {
      //display alert & do nothing
      return setAlert(() => ({
        show: true,
        type: "danger",
        msg: "select a valid item name",
      }));
    } else if (item && isEditing) {
      // edit item
      setItemsList(() => {
        return itemsList.map((obj) => {
          if (obj.id === editID) {
            return { ...obj, title: item };
          }
          return obj;
        });
      });
      setItem("");
      setEditID(null);
      setIsEditing(false);
      setAlert(() => ({
        show: true,
        type: "success",
        msg: "Item successfully edited",
      }));
    } else {
      // add new item + show add alert
      setItemsList(() => [
        ...itemsList,
        {
          id: new Date().getTime().toString(),
          title: item,
        },
      ]);
      setAlert(() => ({
        show: true,
        type: "success",
        msg: "item added successfully",
      }));
      setItem("");
    }
  };

  //---------------------------------------
  // (function () {
  //   // remove alert
  //   setTimeout(() => {
  //     if (alert.show === true) {
  //       return setAlert(() => ({ show: false, msg: "", type: "" }));
  //     }
  //   }, 1000);
  // })();

  //--------------------------------------

  const clearItemsList = () => {
    setItemsList(() => []);
    setAlert(() => ({
      show: true,
      type: "success",
      msg: "item successfully removed",
    }));
  };

  //---------------------------------------
  const deleteItem = (id) => {
    setItemsList(() => itemsList.filter((item) => item.id !== id));
    return setAlert(() => ({
      show: true,
      type: "success",
      msg: "item successfully removed",
    }));
  };

  //---------------------------------------
  const editItem = (id) => {
    const editingItem = itemsList.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setItem(editingItem.title);
  };

  //---------------------------------------
  useEffect(() => {
    localStorage.setItem("itemsListV2", JSON.stringify(itemsList));
  }, [itemsList]);

  return (
    <section className="section-center ">
      <p>function solution version 2: multiple states + NO showAlert()</p>

      <ItemForm
        handleSubmitItem={handleSubmitItem}
        alert={alert}
        setAlert={setAlert}
        item={item}
        setItem={setItem}
        isEditing={isEditing}
      />
      {itemsList.length > 0 && (
        <div className="grocery-container">
          <List
            itemsList={itemsList}
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

import React, { useState, useEffect } from "react";
import List from "./components/List";
import Alert from "./components/Alert";

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsList");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsList"));
  } else {
    return [];
  }
};

function AppFunction() {
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
      return showAlert(true, "danger", "select a valid item name");
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
      showAlert(true, "success", "Item successfully edited");
    } else {
      // add new item + show add alert
      setItemsList(() => [
        ...itemsList,
        {
          id: new Date().getTime().toString(),
          title: item,
        },
      ]);
      showAlert(true, "success", "item added successfully");
      setItem("");
    }
  };

  //---------------------------------------
  // (function(){
  // remove alert
  //   setTimeout(() => {
  //     if (alert.show === true) {
  //       return setAlert({ show: false, msg: "", type: "" })
  //     }
  //   }, 1500)
  // })()

  //---------------------------------------
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  //---------------------------------------
  const clearItemsList = () => {
    setItemsList(() => []);
    showAlert(true, "danger", "emptying list");
  };

  //---------------------------------------
  const deleteItem = (id) => {
    setItemsList(itemsList.filter((item) => item.id !== id));
    showAlert(true, "success", "item successfully removed");
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
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  }, [itemsList]);

  return (
    <section className="section-center ">
      <p>function solution version 1</p>

      <form className="grocery-form" onSubmit={handleSubmitItem}>
        {/* {alert.show && <AlertFunction {...alert} />} */}
        <Alert {...alert} showAlert={showAlert} />
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
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

export default AppFunction;

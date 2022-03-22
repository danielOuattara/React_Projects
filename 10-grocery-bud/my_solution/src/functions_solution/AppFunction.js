import React, { useState, useEffect } from "react";
import ListFunction from "./ListFunction";
import AlertFunction from "./AlertFunction";

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

  const handleSubmitItem = (event) => {
    event.preventDefault();

    if (!item) {
      //display alert & do nothing
      showAlert(true, "danger", "select a valid item name");
      return 0;
    } else if (item && isEditing) {
      // deal with edit
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
      const newItem = {
        id: new Date().getTime().toString(),
        title: item,
      };
      setItemsList(() => [...itemsList, newItem]);
      showAlert(true, "success", "item added succesfully");
      setItem("");
      // localStorage.setItem(JSON.stringify(item), JSON.stringify(item));
    }
  };

  // (function(){  // remove alert
  //   setTimeout(() => {
  //     if (alert.show === true) {
  //       return setAlert({ show: false, msg: "", type: "" })
  //     }
  //   }, 1500)
  // })()

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearItemsList = () => {
    setItemsList([]);
    showAlert(true, "danger", "emptying list");
  };

  const deleteItem = (id) => {
    setItemsList(itemsList.filter((item) => item.id !== id));
    showAlert(true, "success", "item successfully removed");
  }

  const editItem = (id) => {
    const editingItem = itemsList.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setItem(editingItem.title);
  };

  useEffect(() => {
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  }, [itemsList]);

  return (
    <section className="section-center ">
      <form className="grocery-form" onSubmit={handleSubmitItem}>
        {/* {alert.show && <AlertFunction {...alert} />} */}
        <AlertFunction {...alert} removeAlert={showAlert} />
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />
          <button className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {itemsList.length > 0 && (
        <div className="grocery-container">
          <ListFunction
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

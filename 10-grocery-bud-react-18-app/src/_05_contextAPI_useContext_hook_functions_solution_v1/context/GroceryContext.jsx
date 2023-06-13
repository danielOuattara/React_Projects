import { createContext, useState, useEffect, useContext } from "react";

const GroceryContext = createContext();

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsListContextAPI_useContext_V1");
  if (itemsList) {
    return JSON.parse(
      localStorage.getItem("itemsListContextAPI_useContext_V1"),
    );
  } else {
    return [];
  }
};

export default function GroceryContextProvider(props) {
  const [item, setItem] = useState("");
  const [itemsList, setItemsList] = useState(retrieveLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  //---------------------------------------

  const showAlert = (show = false, type = "", msg = "") => {
    return setAlert(() => ({ show, type, msg }));
  };

  //---------------------------------------

  const handleSubmitItem = (event) => {
    event.preventDefault();
    if (!item) {
      //display alert & do nothing
      showAlert(true, "danger", "select a valid item name");
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

  const clearItemsList = () => {
    setItemsList(() => []);
    showAlert(true, "danger", "emptying list");
  };

  //---------------------------------------

  const deleteItem = (id) => {
    setItemsList(() => itemsList.filter((item) => item.id !== id));
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
    localStorage.setItem(
      "itemsListContextAPI_useContext_V1",
      JSON.stringify(itemsList),
    );
  }, [itemsList]);

  const context = {
    item,
    setItem,
    itemsList,
    setItemsList,
    isEditing,
    setIsEditing,
    editID,
    setEditID,
    alert,
    setAlert,
    showAlert,
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
